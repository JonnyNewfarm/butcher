import prisma from '@/libs/prismadb'
import { revalidateTag } from 'next/cache';


export interface IProductParams {
    category?: string | null;
    gender?: string | null;
    searchTerm?: string | null;
    brand?: string | null;
    price?: string | null;
    
}


export default async function getProducts(params:IProductParams) {

    try{
        const {category, searchTerm, gender, brand} = params;
        let searchString = searchTerm;
        
        if(!searchTerm) {
searchString = ''
        }

        let query:any = {}

        if(category){
query.category = category
        }

        if(gender){
            query.gender = gender
                    }

                    if(brand){
                        query.brand = brand
                                }

        const products = await prisma.product.findMany({
         
            where:{
                ...query,
                OR: [
                    {
                        name: {contains: searchString, mode: 'insensitive', },
                        

                    },
                    {
                        description: {contains: searchString, mode: 'insensitive', },
                    },

                    {brand: {contains: searchString, mode: 'insensitive', },}
                ],
                
            },

           

          
            
            
        })
        
return products
    } catch(error: any) {
        throw new Error(error)

    }
    
}