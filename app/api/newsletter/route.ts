import {prisma} from '@/prisma/prisma'
import { NextResponse } from 'next/server'


export async function POST() {
  const formData = new FormData
   const email = formData.get("newsInput")
    let error = ""

    const data = await prisma.newsletter.create({
        data: {
          email: email as string,
        },
      });

    return NextResponse.json(data)
}





