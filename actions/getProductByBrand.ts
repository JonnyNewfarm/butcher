import prisma from '@/libs/prismadb'
import { revalidateTag } from 'next/cache';





export default async function getProductByBrand() {

    try{

        

                                

        const products = await prisma.product.findMany({
         
            where:{
                
   brand: "Dormo"
                
            },

           

          
            
            
        })
        
return products
    } catch(error: any) {
        throw new Error(error)

    }}
    
