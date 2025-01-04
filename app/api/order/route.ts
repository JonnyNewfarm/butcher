import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
import { getLoggedInUser } from '@/actions/getLoggedInUser'; 



export async function PUT(request: Request) {
  const currentUser = await getLoggedInUser();


  if(!currentUser || currentUser.role !== 'ADMIN'){
    return NextResponse.error()
  }

  

  const body = await request.json();
  const { id, deliveryStatus } = body;

  const order = await prisma.order.update({
    where: { id: id },
    data: { deliveryStatus },
  });

  return NextResponse.json(order);
}