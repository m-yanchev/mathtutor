import { put, get } from "@vercel/blob";
import type { UploadFilesParams, ImageDataSource } from "./interfaces"

export default class ImageVercelBlob implements ImageDataSource {
  private readonly key: string;

  constructor({parent}: UploadFilesParams) {
    this.key = `${parent.name}/${String(parent.id)}`;
  }
  
  public async writeFiles({ files }: { files: File[] }): Promise<void> {
    await Promise.all(files.map(async file => {
      await put(this.key, file, { access: 'private' });
    }));
  }

  public async readFile(fileName: string): Promise<{ fileBuffer: Buffer<ArrayBufferLike>, mimeType: string }> {
    const result = await get(`${this.key}/${fileName}`, { access: 'private' });
    if (result?.statusCode === 200) {
      const ab = new Response(result.stream).arrayBuffer();
      const buffer = Buffer.from(await ab);
      return { fileBuffer: buffer, mimeType: "image/png" };
    } else {
      console.error(`Failed to read file ${fileName}`);
      throw new Error(`File not found: ${fileName}`);
    }
  }
}