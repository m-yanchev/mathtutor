import type { IImageCommonAttributes, IImageExtensionAttributes, IImageHTMLAttributes, PreviewMap } from "./interfaces"

class ImageCommonAttributes implements IImageCommonAttributes {

    public readonly alt: string
    public readonly width: number
    public readonly height: number
    
    constructor( { alt, width, height }: { alt: string, width: number, height: number } ) {
        this.alt = alt
        this.width = width
        this.height = height
    }
}

type ImageAttributesParams = {
    attrs: IImageExtensionAttributes,
    parentId?: number | undefined | null,
    previewMap?: PreviewMap
}

export class ImageHTMLTagAttributes extends ImageCommonAttributes implements IImageHTMLAttributes {

    public readonly src: string

    constructor( { attrs, parentId, previewMap }: ImageAttributesParams ) {

        super( attrs)

        const isParentId = Boolean(parentId)
        console.log("ImageHTMLTagAttributes", { parentId, isParentId, attrs, previewMap })
        const localSrc = previewMap?.get( attrs.filename )
        if ( !isParentId && !localSrc ) {
            throw new Error("Either parentId or previewMap with filename must be provided")
        }
        const remoteSrc = `/api/example/${ String(parentId) }/files/${ attrs.filename }?lm=${ attrs.lastmodified }`

        this.src = localSrc || remoteSrc
    }
}

export class ImageExtensionAttributes extends ImageCommonAttributes implements IImageExtensionAttributes {

    public readonly lastmodified: string;
    public readonly filename: string;

    private constructor( attrs: IImageExtensionAttributes ) {
        super(attrs)
        this.lastmodified = attrs.lastmodified
        this.filename = attrs.filename
    }

    static async createByFile(
        { file, alt }: { file: File | undefined | null, alt: string }
    ): Promise< ImageExtensionAttributes | null > {
        if ( !file || !(file instanceof File) || file.size === 0 ) {
            return null
        }
        const bitmap = await createImageBitmap(file)
        return new ImageExtensionAttributes({
            lastmodified: file.lastModified.toString(),
            alt,
            width: bitmap.width,
            height: bitmap.height,
            filename: file.name      
        })
    }
}