
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/libs/stripe';
import prisma from '@/libs/prismadb';







export const POST = async (req: NextRequest) => {
    try{
const rawBody = await req.text()
const signature = req.headers.get("Stripe-Signature") as string 

const event = stripe.webhooks.constructEvent(
    rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
)

if(event.type === "checkout.session.completed"){
    const session = event.data.object

    const customerInfo = {
        currentUserId: session?.client_reference_id,
        name: session?.customer_details?.name,
        email: session?.customer_details?.email,
       }

    const shippingAddress = {
streetNumber: session?.shipping_details?.address?.line1,
streetName: session?.shipping_details?.address?.line2,
city: session?.shipping_details?.address?.city,
state: session?.shipping_details?.address?.state,
postalCode: session?.shipping_details?.address?.postal_code,
country: session?.shipping_details?.address?.country,


    }

    const retriveSession = await stripe.checkout.sessions.retrieve(
        session.id,
        { expand: ["line_items.data.price.product"] }
    )
    const lineItems = await retriveSession?.line_items?.data;

    const orderItems = lineItems?.map((item: any) => {
        return {
            product: item.price.product.metadata.productId,
            quantity: item.quantity,
            color: item.price.product.metadata.color,
            size: item.price.product.metadata.size,
            selectedImage: item.price.product.metadata.image,
            name: item.price.product.name,
            

            
        }
    })

    

   
const newOrder = {
            
    userId: customerInfo.currentUserId!,
    name: customerInfo.name,
    email: customerInfo.email,
    products: orderItems,
    address:  shippingAddress,
    totalAmount: session.amount_total ? session.amount_total / 100 : 0, 
    
    

}
    

 
    await prisma.order.create({
        data: newOrder
    })



   


   

     

  

    


  
}





return new NextResponse("Order created", {status: 200})

    }catch (err) {
        console.log("webhooks", err)
        return new NextResponse("failed to create order", {status: 500})
    }
}
