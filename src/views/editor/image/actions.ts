'use server'

import type { UploadFilesParams } from "@/essences/image/interfaces";
import ImageStorage from "@/essences/image/ImageStorage";

export default async function uploadFiles(files: File[], {parent}: UploadFilesParams) {
    const imageStorage = new ImageStorage({ parent });
    await imageStorage.writeFiles({ files });
}