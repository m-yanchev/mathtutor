import DataSource from "@/essences/example/DataSource"
import type { ContentProps } from "@/essences/example/interfaces"
import { NextRequest } from "next/server"

export async function PUT( request: NextRequest ) {

    const { contentProps } = await request.json() as { contentProps: ContentProps }
    await DataSource.updateContentProps( contentProps )

    return new Response( null, { status: 200 } )
}