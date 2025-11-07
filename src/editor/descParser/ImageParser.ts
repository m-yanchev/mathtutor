import { ImageHTMLTagAttributes } from "@/editor/Image/ImageAttributes"
import { AnswerOptionImage, DescImage } from "@/editor/descParser/components/images"
import type { IParser, ParserComponentProps } from "@/views/example/description/interfaces"
import { NodeType, ParserConstructorProps } from "./interfaces"

export default class ImageParser implements IParser {

    private readonly parentType: NodeType
    private readonly width: number
    private readonly height: number
    private readonly alt: string
    private readonly src: string  

    constructor( { node, id }: ParserConstructorProps ) {

        if (!id) {
            console.info(node)
            throw new Error("Expected id have value")
        }

        const parentType = node.parentType
        if ( parentType !== "doc" && parentType !== "answer-option" ) {
            throw new Error("Expected the parentName value is doc or answer-option")
        }
        this.parentType = parentType

        const width = Number( node.attr("width") )
        const height = Number( node.attr("height") )
        const filename = node.attr("filename") || "image.png"
        const lastmodified = node.attr("lastmodified") || ""        
        const alt = node.children[0].text

        const tagAttrs = new ImageHTMLTagAttributes({ 
                    parentId: id, 
                    attrs: { filename, alt, lastmodified, width, height } 
                })

        this.width = tagAttrs.width
        this.height = tagAttrs.height
        this.src = tagAttrs.src
        this.alt = tagAttrs.alt
    }

    public Component = ( {key}: ParserComponentProps ) => {

        const components = {
            "doc": DescImage,
            "answer-option": AnswerOptionImage
        }
        if ( this.parentType !== "doc" && this.parentType !== "answer-option" ) 
            throw new Error("Expected parentName is doc or answer-option")
        const Image = components[this.parentType]

        return Image( { src: this.src, alt: this.alt, width: this.width, height: this.height, key } )
    }

    static create( { node, id }: ParserConstructorProps ): ImageParser {
        return new ImageParser({ node, id })
    }
}