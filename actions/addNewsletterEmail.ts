"use server"
import prisma from '@/libs/prismadb'




export const AddNewsletterEmail = async (formData:FormData) => {

    const email = formData.get("newsInput")
    
    try{
        await prisma.newsletter.create({
            data: {
              email: email as string,
            },
          });
    } catch(error) {
        return {
            error: "Something went wrong"
        }

    }




      

     
      

}