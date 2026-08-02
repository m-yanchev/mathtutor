import { NextResponse } from "next/server"
import ImageStorage from "@/essences/image/ImageStorage";

export async function GET( req: Request, { params }: { params: Promise<{ id: string, filename: string }> }) {

    const { id, filename } = await params

    const imageStorage = new ImageStorage({ parent: { name: 'examples', id: Number(id) }});
    const { fileBuffer, mimeType } = await imageStorage.readFile(filename)

    return new NextResponse( new Uint8Array(fileBuffer), {
        headers: {
            'Content-Type': mimeType,
        }
    } );
}