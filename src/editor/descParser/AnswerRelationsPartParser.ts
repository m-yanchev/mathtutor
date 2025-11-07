import { IParser, ParserComponentProps } from "../../views/example/description/interfaces"
import AnswerOptionsParser from "./AnswerOptionsParser"
import AnswerRelationsPart from "./components/AnswerRelationsPart"
import { ParserConstructorProps } from "./interfaces"
import PParser from "./PParser"

export default class AnswerRelationsPartParser implements IParser {

    private readonly title: PParser
    private readonly options: AnswerOptionsParser

    constructor( { node, id }: ParserConstructorProps ) {
        const children = node.children
        this.title = new PParser({ node: children[0] })
        this.options = new AnswerOptionsParser({ node: children[1], id })
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return AnswerRelationsPart({ 
            Title: () => this.title.Component({ key: 0 }), 
            Options:  () => this.options.Component({ key: 1 }),
            key
        })
    }

    static create( { node, id }: ParserConstructorProps ): AnswerRelationsPartParser {
        return new AnswerRelationsPartParser({ node, id })
    }
}