import { prisma } from "@/dataSources/prisma"
import User from "@/essences/user/User"
import { findFormulasInStorageByLatex } from "@/views/formula/actions"
import { BEGINING_GET_PARAM } from "@/views/formula/constants"
import { type NextRequest, NextResponse } from "next/server"

export async function GET( request: NextRequest ): Promise<NextResponse> {

    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get(BEGINING_GET_PARAM)
    if (!query) {
        return NextResponse.json({ error: `Query parameter '${BEGINING_GET_PARAM}' is required` }, { status: 400 })
    }

    const result = await findFormulasInStorageByLatex(query)
    
    return NextResponse.json(result)
}

export async function PUT(req: Request) {
    const { latex } = await req.json()
    if (!(await User.checkAdminAccess())) {
        return Response.json({error: "User don't have access"}, {status: 403})
    }
    const formula = await prisma.formula.findFirst({where: {latex}, select: {id: true}})
    if(formula) return Response.json({id: formula.id})
    const {id} = await prisma.formula.create({data: {latex}, select:{id: true}})
    return Response.json({id})
}