import Stripe from 'stripe';
import prisma from '@/libs/prismadb'
import { NextRequest, NextResponse } from 'next/server';
import { ProductType } from '@/app/components/products/ProductDetails'; 
import { getLoggedInUser } from '@/actions/getLoggedInUser';




const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}



const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  typescript: true
});

export async function POST(req: NextRequest) {
  
  try{
const { cartProducts, customer } = await req.json();

if (!cartProducts || !customer) {
  return new NextResponse("Not enough data to checkout", { status: 400 });
}



const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  mode: "payment",
  shipping_address_collection: {
    allowed_countries: ["US", "CA"],
  },
  shipping_options: [
    { shipping_rate: "shr_1Q0stNIrB6c4Ijomad4myhml" },
    { shipping_rate: "shr_1Q0suBIrB6c4IjomlPeUPP1q" },
  ],
  line_items: cartProducts.map((cartItem: any) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: cartItem.name,
        metadata: {
          productId: cartItem.id,
          color: cartItem.selectedImage.color

        
        },
      },
      unit_amount: cartItem.price * 100,
    },
    quantity: cartItem.quantity,
    
  })),
  client_reference_id: customer.currentUserId,
  
  
  success_url: `${process.env.ECOMMERCE_STORE_URL}/payment_success`,
  cancel_url: `${process.env.ECOMMERCE_STORE_URL}/cart`,
});

return NextResponse.json(session, { headers: corsHeaders });

  }catch(err) {
    console.log('webhooks-error',err)
    return new NextResponse("Internal server error", {status: 500})
  }
  
}

