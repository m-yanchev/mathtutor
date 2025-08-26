"use server"

import type { UploadFilesParams } from "./interfaces";
import ImageFS from "./ImageFS";

export async function uploadFiles(files: File[], {parent}: UploadFilesParams) {
    const imageFS = new ImageFS({ parent });
    await imageFS.writeFiles({ files });
}