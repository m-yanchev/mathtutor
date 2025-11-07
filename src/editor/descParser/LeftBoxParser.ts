import { IParser } from "../../views/example/description/interfaces"
import AnswerOptionsParser from "./AnswerOptionsParser"
import AnswerRelationsParser from "./AnswerRelationsParser"
import { NodeWithChildrenParser } from "./BaseParsers"
import LeftBox from "./components/LeftBox"
import { LeftBoxChildNodeType, ParserConstructorProps } from "./interfaces"
import PParser from "./PParser"
import TableParser from "./TableParser"

export default class LeftBoxParser extends NodeWithChildrenParser implements IParser {

    constructor( { node, id }: ParserConstructorProps ) {
        const creators: Record< LeftBoxChildNodeType, (props: ParserConstructorProps) => IParser > = {
            "p": PParser.create,
            "table": TableParser.create,
            "answer-options": AnswerOptionsParser.create,
            "answer-relations": AnswerRelationsParser.create,
        }        
        const children = node.children.map( child => {
            const tagName = child.type
            if ( tagName !== "p" && tagName !== "table" && tagName !== "answer-options" && tagName !== "answer-relations" ) {
                console.log(child)
                throw new Error(`${tagName} tag did't expect in left-box`)
            }
            return creators[tagName]({ node: child, id })
        })
        super({children})
    }

    public Component = () => {
        return LeftBox({children: this.childComponents})
    }

    static create( { node, id }: ParserConstructorProps ): LeftBoxParser {
        return new LeftBoxParser({ node, id })
    }
}