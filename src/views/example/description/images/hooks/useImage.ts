"use client";

import { useState } from "react";
import { uploadFiles } from "../actions";
import type { UploadFilesParams } from "../interfaces";

export default function useImage() {

    const [images, setImages] = useState<File[]>([]);

    const handleAddImage = ( file: File ) => {
        setImages( prevImages => [...prevImages, file] );
    };

    const uploadImages = async ( params: UploadFilesParams ) => {
        if ( images.length > 0 ) {
            await uploadFiles( images, params )
        }
    }

    return {
        imageProviderValue: {
            onAdd: handleAddImage
        },
        uploadImages
    };
}