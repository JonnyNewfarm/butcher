"use server"
import prisma from '@/libs/prismadb'



export const AddNewsletterEmail = async (formData:FormData) => {

    const email = formData.get("newsInput")
    let error = ""

    const data = await prisma.newsletter.create({
        data: {
          email: email as string,
        },
      });

     
      

}