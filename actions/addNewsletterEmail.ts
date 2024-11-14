"use server"
import prisma from '@/libs/prismadb'


export const getErrorMessage = (error: unknown): string => {
    let message: string

    if(error instanceof Error) {
        message = error.message
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string"){
message = error;
    } else {
        message = "Something went wrong"
    }
    return message
}




export const AddNewsletterEmail = async (email: string) => {

    
    
    try{
        await prisma.newsletter.create({
            data: {
              email: email,
            },
          });
    } catch(error) {
        return {
            error: getErrorMessage(error)
        }

    }




      

     
      

}