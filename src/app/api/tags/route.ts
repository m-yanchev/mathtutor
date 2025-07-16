import { checkAdminAccess } from "@/app/_lib/dal"
import type { TagsPOSTRequest, TagsPUTRequest } from "@/app/_lib/tags"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export async function POST(req: Request): Promise<Response> {
    const { tagBegin } : TagsPOSTRequest = await req.json()
    const tags = await prisma.tag.findMany({where: {title: {startsWith: tagBegin}}, select: {title: true, id: true}})
    return Response.json({tags})
}

export async function PUT(req: Request): Promise<Response> {
    if (!(await checkAdminAccess())) {
        return Response.json({error: "User don't have access"}, {status: 403})
    }    
    const { title } : TagsPUTRequest = await req.json()
    const tag = await prisma.tag.findFirst({where: {title}, select: {id: true}})
    if(tag) return Response.json({id: tag.id})
    const {id} = await prisma.tag.create({data: {title}, select:{id: true}})
    return Response.json({id})
}