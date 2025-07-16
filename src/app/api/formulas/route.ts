import { checkAdminAccess } from "@/app/_lib/dal"
import { prisma } from "@/app/_lib/prisma"

export async function POST(req: Request) {
    const { latex } = await req.json()
    const formulas = await prisma.formula.findMany({where: {latex: {startsWith: latex}}, select: {latex: true, id: true}})
    return Response.json({formulas})
}

export async function PUT(req: Request) {
    const { latex } = await req.json()
    if (!(await checkAdminAccess())) {
        return Response.json({error: "User don't have access"}, {status: 403})
    }
    const formula = await prisma.formula.findFirst({where: {latex}, select: {id: true}})
    if(formula) return Response.json({id: formula.id})
    const {id} = await prisma.formula.create({data: {latex}, select:{id: true}})
    return Response.json({id})
}