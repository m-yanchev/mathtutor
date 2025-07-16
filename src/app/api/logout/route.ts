import { redirect } from "next/navigation";
import { prisma } from "@/app/_lib/prisma";
import { deleteSession, getUserId } from "@/app/_lib/session";

export async function GET() {

    const sessionUserId = await getUserId()
    if (sessionUserId) {
        await prisma.user.delete({
            where: {
                id: sessionUserId
            }
        })
        deleteSession()
    }

    redirect("/")
}