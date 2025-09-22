import { IParser, ParserComponentProps } from "../interfaces"
import AnswerRelationsPartParser from "./AnswerRelationsPartParser"
import { NodeWithChildrenParser } from "./BaseParsers"
import AnswerRelations from "./components/AnswerRelations"
import { ParserConstructorProps } from "./interfaces"

export default class AnswerRelationsParser extends NodeWithChildrenParser implements IParser {

    constructor( { node, id }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const tagName = child.type
            if ( tagName !== "answer-parts" )
                throw new Error(`${tagName} tag did't expire in answer-option`)
            return AnswerRelationsPartParser.create({ node: child, id })
        })
        super({children})
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return AnswerRelations({ children: this.childComponents, key })
    }

    static create( { node, id }: ParserConstructorProps ): AnswerRelationsParser {
        return new AnswerRelationsParser({ node, id })
    }
}