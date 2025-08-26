import ImageParser from "../images/editorExtension/ImageParser"
import { IParser, ParserComponentProps } from "../interfaces"
import { NodeWithChildrenParser } from "./BaseParsers"
import AnswerOption from "./components/AnswerOption"
import { AnswerOptionChildNodeType, AnswerOptionIndex, ParserConstructorProps } from "./interfaces"
import PParser from "./PParser"

export default class AnswerOptionsParser extends NodeWithChildrenParser implements IParser {

    private readonly index: AnswerOptionIndex

    constructor( { node, id }: ParserConstructorProps ) {

        const creators: Record< AnswerOptionChildNodeType, (props: ParserConstructorProps) => IParser > = {
            "p": PParser.create,
            "desc-image": ImageParser.create,
        }        
        const children = node.children.map( child => {
            const tagName = child.type
            if ( tagName !== "p" && tagName !== "desc-image" ) {
                console.log(child)
                throw new Error(`${tagName} tag did't expect in answer-option`)
            }
            return creators[tagName]({ node: child, id })
        })
        super({children})
        this.index = node.attr("index") as AnswerOptionIndex
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return AnswerOption({ children: this.childComponents, key, index: this.index })
    }

    static create( { node, id }: ParserConstructorProps ): AnswerOptionsParser {
        return new AnswerOptionsParser({ node, id })
    }
}