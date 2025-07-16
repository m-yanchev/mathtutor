import { redirect } from "next/navigation";
import { Role } from "@prisma/client";
import { prisma } from "@/app/_lib/prisma";
import { createSession } from "@/app/_lib/session";
import { getUserId } from "@/app/_lib/session";

export async function GET(request: Request) {

    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const paramKey = searchParams.get('key');
    const reqKey = process.env.ADMIN_KEY;
    const sessionUserId = await getUserId()
    const paramRole = paramKey === reqKey ? "ADMIN" : "USER"

    const loginUser = async (role: Role) => {
        const user = await prisma.user.create({data: { role }});
        await createSession(user.id)
    }

    if (sessionUserId === 0) await loginUser(paramRole);
    else {
        const sessionUser = await prisma.user.findUnique({where: {id: sessionUserId}})
        if (!sessionUser) throw new Error("User row isn`t in database but this user is in session")
        if (sessionUser.role !== paramRole) {
            await prisma.user.update({where: {id: sessionUserId}, data: {role: paramRole}})
        }
    }  

    redirect("/")
}