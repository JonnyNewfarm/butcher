import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/prisma/prisma";
import { getServerSession } from "next-auth";

export async function getSession() {
    return await getServerSession(authOptions)
} 


export async function getLoggedInUser() {
    try {
const session = await getSession()

if(!session?.user?.email) {
    return null
}

const currentUser = await prisma.user.findUnique({
    where: {
        email: session?.user?.email
    },
});
if(!currentUser) {
    return null
}

return {
    ...currentUser,
    createdAt: currentUser.createdAt!.toISOString(),
    updatedAt: currentUser.updatedAt!.toISOString(),
    emailVertified: currentUser.emailVerified?.toISOString() || null,
    
}


    } catch(error: any) {
return null
    }
}