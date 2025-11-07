import MathParser from "./MathParser"
import { IParser, ParserComponentProps } from "../../views/example/description/interfaces"
import { NodeType, ParserConstructorProps } from "./interfaces"
import TextParser from "./TextParser"
import BoldParser from "./BoldParser"
import { NodeWithChildrenParser } from "./BaseParsers"
import Paragraph, { RelationsPartPargraph } from "./components/Paragraph"

export default class PParser extends NodeWithChildrenParser implements IParser {

    private readonly parentType: NodeType

    constructor( { node }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const creators = {
                "text": TextParser.create,
                "math": MathParser.create,
                "strong": BoldParser.create
            }
            const tagName = child.type
            if ( tagName !== "text" && tagName !== "math" && tagName !== "strong" )
                throw new Error(`${tagName} tag did't expire in paragraph`)
            return creators[tagName]({node: child})
        })
        super({children})

        this.parentType = node.parentType
    }

    public Component = ( {key}: ParserComponentProps ) => {
        const componentMap = ( new Map() ).set( "answer-parts", RelationsPartPargraph )
        const P = componentMap.get( this.parentType ) || Paragraph
        return P({ children: this.childComponents, key })
    }

    static create( { node, id }: ParserConstructorProps ): PParser {
        return new PParser({ node, id })
    }
}