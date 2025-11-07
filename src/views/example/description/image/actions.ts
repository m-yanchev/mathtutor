"use server"

import type { UploadFilesParams } from "@/essences/image/interfaces";
import ImageFS from "@/essences/image/ImageFS";

export async function uploadFiles(files: File[], {parent}: UploadFilesParams) {
    const imageFS = new ImageFS({ parent });
    await imageFS.writeFiles({ files });
}