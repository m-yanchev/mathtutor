import { mkdir, readFile, rm, writeFile } from "fs/promises"
import path from "path"
import type { UploadFilesParams, ImageDataSource } from "./interfaces"

export default class ImageFS implements ImageDataSource {

    private readonly dirPath: string

    constructor( {parent}: UploadFilesParams ) {
        this.dirPath = path.join( process.cwd(), "uploads", parent.name, String(parent.id) )
    }

    public async createDirectory(): Promise<void> {
        await mkdir( this.dirPath, { recursive: true, mode: 0o755 } )
    }

    public async writeFiles( { files }: { files: File[] } ): Promise<void> {
        await mkdir( this.dirPath, { recursive: true, mode: 0o755 } )
        await Promise.all( files.map( async file => {        
            const filePath = path.join( this.dirPath, file.name )
            const buffer = Buffer.from( await file.arrayBuffer() )
            await writeFile( filePath, buffer, { mode: 0o644 } )
        } ) )
    }

    public async deleteFile( fileName: string ): Promise<void> {
        const filePath = path.join( this.dirPath, fileName )
        await rm( filePath, { force: true } )
    }

    public async deleteFolder(): Promise<void> {
        await rm( this.dirPath, { recursive: true, force: true } )
    }

    public async readFile( fileName: string ): Promise<{ fileBuffer: Buffer<ArrayBufferLike>, mimeType: string }> {
        const filePath = path.join( this.dirPath, fileName )
        try {
            return { fileBuffer: await readFile( filePath ), mimeType: "image/png" }
        } catch (error) {
            console.error(`Failed to read file ${filePath}:`, error);
            throw new Error(`File not found: ${fileName}`);
        }
    }
}