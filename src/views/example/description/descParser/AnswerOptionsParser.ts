import { IParser, ParserComponentProps } from "../interfaces"
import { NodeWithChildrenParser } from "./BaseParsers"
import { ParserConstructorProps } from "./interfaces"
import AnswerOptionParser from "./AnswerOptionParser"
import AnswerOptions from "./components/AnswerOptions"

export default class AnswerOptionsParser extends NodeWithChildrenParser implements IParser {

    private readonly col: boolean

    constructor( { node, id }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const tagName = child.type
            if ( tagName !== "answer-option" )
                throw new Error(`${tagName} tag did't expire in answer-option`)
            return AnswerOptionParser.create({ node: child, id })
        })
        super({children})
        this.col = node.attr("state") !== "row"
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return AnswerOptions({ children: this.childComponents, key, col: this.col })
    }

    static create( { node, id }: ParserConstructorProps ): AnswerOptionsParser {
        return new AnswerOptionsParser({ node, id })
    }
}