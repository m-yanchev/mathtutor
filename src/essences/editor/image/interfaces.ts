export type PreviewMap = Map<string, string>;

export interface IImageExtensionAttributes extends IImageCommonAttributes {
    filename: string
    lastmodified: string
}

export interface IImageHTMLAttributes extends IImageCommonAttributes {
    src: string
}

export interface IImageCommonAttributes {
    alt: string
    width: number
    height: number
}