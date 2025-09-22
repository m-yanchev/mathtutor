import { prisma } from "@/dataSources/prisma";

export async function POST() {
    const examples = await prisma.example.findMany({ include: { tags: true } });
    return Response.json({ examples });    
}