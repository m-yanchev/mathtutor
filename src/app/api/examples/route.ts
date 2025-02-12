import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export async function POST(req: Request) {
    const { description } = await req.json()
    await prisma.examples.create({data: {description: String(description)}})
}