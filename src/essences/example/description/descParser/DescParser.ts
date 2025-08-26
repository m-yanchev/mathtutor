import ImageParser from "../images/editorExtension/ImageParser"
import { IParser } from "../interfaces"
import Description from "./components/Description"
import LeftBoxParser from "./LeftBoxParser"
import Node from "./Node"

export default class DescParser implements IParser {

    private readonly leftBox: LeftBoxParser
    private readonly image: ImageParser | null
    
    constructor( { id, content }: { id: number, content: string } ) {
        const node = Node.createByContent({content})
        const children = node.children
        this.leftBox = new LeftBoxParser({ node: children[0], id })
        this.image = children.length > 1 ? new ImageParser({ node: children[1], id }) : null
    }

    public Component = () => {
        
        const LeftBox = this.leftBox.Component
        const ImageComponent = this.image?.Component

        return Description({ LeftBox, ImageComponent })
    }
}
