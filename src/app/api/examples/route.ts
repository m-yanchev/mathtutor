import { prisma } from "@/app/_lib/prisma";

export async function POST() {
    const examples = await prisma.example.findMany({ include: { tags: true } });
    return Response.json({ examples });    
}