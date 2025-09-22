export interface IImageCommonAttributes {
    alt: string
    width: number
    height: number
    lastmodified: string
}

export interface IImageEditorNodeAttributes extends IImageCommonAttributes {
    filename: string
    previewurl?: string
}

class ImageAttributes {

    public readonly alt: string
    public readonly width: number
    public readonly height: number
    
    constructor( { alt, width, height }: { alt: string, width: number, height: number } ) {
        this.alt = alt
        this.width = width
        this.height = height
    }
}

export class ImageHTMLTagAttributes extends ImageAttributes {

    public readonly src: string

    constructor({ attrs, parentId }: { attrs: IImageEditorNodeAttributes, parentId?: number | undefined | null }) {

        super({ alt: attrs.alt, width: attrs.width, height: attrs.height })

        const isParentId = Boolean(parentId)
        const isPreviewUrl = Boolean(attrs.previewurl)
        const srcDataIsNotComplete = ( !isParentId && !isPreviewUrl ) 
        if (srcDataIsNotComplete) throw new Error("attrs isn`t complete")

        const src = isPreviewUrl ? 
            attrs.previewurl : 
            `/api/example/${ String(parentId) }/files/${ attrs.filename }?lm=${ attrs.lastmodified }`            
        if ( !src ) throw new Error("Source constant haven`t a defined value")
        this.src = src
    }
}

export class ImageEditorNodeAttributes extends ImageAttributes implements IImageEditorNodeAttributes {

    public readonly lastmodified: string;
    public readonly filename: string;
    public readonly previewurl: string;

    private constructor( attrs: IImageEditorNodeAttributes ) {
        super(attrs)
        this.lastmodified = attrs.lastmodified
        this.filename = attrs.filename
        if (!attrs.previewurl) {
            throw new Error("Preview URL is required")
        }
        this.previewurl = attrs.previewurl
    }

    static async createByFile(
        { file, alt }: { file: File | undefined | null, alt: string }
    ): Promise< ImageEditorNodeAttributes | null > {
        if ( !file || !(file instanceof File) || file.size === 0 ) {
            return null
        }
        const bitmap = await createImageBitmap(file)
        return new ImageEditorNodeAttributes({
            previewurl: URL.createObjectURL(file),
            lastmodified: file.lastModified.toString(),
            alt,
            width: bitmap.width,
            height: bitmap.height,
            filename: file.name      
        })
    }
}