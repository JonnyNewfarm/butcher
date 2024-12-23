import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
import { getLoggedInUser } from '@/actions/getLoggedInUser'; 

// API: Post to add the product to db
export async function POST(request: Request) {
  const currentUser = await getLoggedInUser();

  if (!currentUser) return NextResponse.error();

  if (currentUser.role != 'ADMIN') {
    // If currentUser is not Admin role, return err
    return NextResponse.error();
  }

  // get the body from req
  const body = await request.json();
  // properties from body
  const { name, description, price, brand, category, inStock, images, gender } = body;

  // Create a product
  const product = await prisma.product.create({
    data: {
      name,
      description,
      brand,
      category,
      inStock,
      images,
      gender,
      price: parseFloat(price),
    },
  });

  // Return the user using NextResponse
  return NextResponse.json(product);
}

// API: PUT modify inStock of the product
export async function PUT(request: Request) {
  const currentUser = await getLoggedInUser();

  // If currentUser is not Admin role, return err
  if (!currentUser || currentUser.role != 'ADMIN') {
    return NextResponse.error();
  }

  const body = await request.json();
  const { id, inStock } = body;

  const product = await prisma.product.update({
    where: { id: id },
    data: { inStock },
  });

  return NextResponse.json(product);
}



export interface IProductParams {
  category?: string | null;
  gender?: string | null;
  searchTerm?: string | null;
}


export  async function GET(params:IProductParams) {

  try{
      const {category, searchTerm, gender} = params;
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

      const products = await prisma.product.findMany({
         
          where:{
              ...query,
              OR: [
                  {
                      name: {contains: searchString, mode: 'insensitive'},
                      

                  }
              ]
          },

        
          
          
      })
      
      return NextResponse.json(products);
  } catch(error: any) {
      throw new Error(error)

  }


}