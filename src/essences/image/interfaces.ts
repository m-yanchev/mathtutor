export interface UploadFilesParams {
    parent: { id: number; name: string; }
}

export interface ImageDataSource {
    writeFiles( params: { files: File[] } ): Promise<void>;
    readFile( fileName: string ): Promise<{ fileBuffer: Buffer<ArrayBufferLike>, mimeType: string }>;
}