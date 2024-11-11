import {prisma} from '@/prisma/prisma'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    const body = await request.json()
    const { email} = body
    

    const newsletter = await prisma.newsletter.create({
        data: {
        email, 
        }
    })

    return NextResponse.json(newsletter)
}