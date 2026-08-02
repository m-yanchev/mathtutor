import ImageFS from "./ImageFS"
import type { UploadFilesParams, ImageDataSource } from "./interfaces"
import ImageVercelBlob from "./ImageVercelBlob"

export default class ImageStorage implements ImageDataSource {
    private readonly imageDS: ImageDataSource;

    constructor( {parent}: UploadFilesParams ) {
        this.imageDS = process.env.NODE_ENV === 'development' ?
            new ImageFS({ parent }) :
            new ImageVercelBlob({ parent });
    }

    public async writeFiles( { files }: { files: File[] } ): Promise<void> {
        await this.imageDS.writeFiles({ files });
    }

    public async readFile( fileName: string ): Promise<{ fileBuffer: Buffer<ArrayBufferLike>, mimeType: string }> {
        return await this.imageDS.readFile(fileName);
    }
}
