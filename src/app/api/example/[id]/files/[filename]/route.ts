import { NextResponse } from "next/server"
import ImageFS from "@/essences/example/description/images/ImageFS";

export async function GET(req: Request, { params }: { params: Promise<{ id: string, filename: string }> }) {

    const { id, filename } = await params

    const imageFS = new ImageFS({ parent: { name: 'examples', id: Number(id) }});
    const { fileBuffer, mimeType } = await imageFS.readFile(filename)

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': mimeType,
        }
    });
}