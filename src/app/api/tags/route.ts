import { checkAdminAccess } from "@/app/_lib/dal"
import { BEGINING_GET_PARAM, findTagsInStorageByTitle, putTagInStorage } from "@/essences/tags/actions"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get(BEGINING_GET_PARAM)
    if (!query) {
        return NextResponse.json({ error: `Query parameter '${BEGINING_GET_PARAM}' is required` }, { status: 400 })
    }
    const result = await findTagsInStorageByTitle({ titleBegining: query })
    return NextResponse.json(result)
}

export async function PUT(req: Request): Promise<Response> {
    if (!(await checkAdminAccess())) {
        return Response.json({error: "User don't have access"}, {status: 403})
    }    
    const result = await putTagInStorage( await req.json() )
    return Response.json(result)
}