import { Extension } from '@tiptap/core'
import { PreviewMap } from '@/essences/editor/image/interfaces'

type ImagePreviewExtensionStorage = {
    map: PreviewMap
}

declare module '@tiptap/core' {
    interface Storage {
        imagePreview: ImagePreviewExtensionStorage
    }
}

const ImagePreview = Extension.create<any, ImagePreviewExtensionStorage>({
    name: 'imagePreview',

    addStorage() { {
        return {
            map: new Map<string, string>(),
        }
    } },
})

export default ImagePreview;