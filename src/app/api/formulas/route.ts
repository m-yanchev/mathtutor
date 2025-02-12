import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export async function POST(req: Request) {
    const { latex } = await req.json()
    const formulas = await prisma.formulas.findMany({where: {latex: {startsWith: latex}}, select: {latex: true, id: true}})
    return Response.json({formulas})
}

export async function PUT(req: Request) {
    const { latex } = await req.json()
    const formula = await prisma.formulas.findFirst({where: {latex}, select: {id: true}})
    if(formula) return Response.json({id: formula.id})
    const {id} = await prisma.formulas.create({data: {latex}, select:{id: true}})
    return Response.json({id})
}