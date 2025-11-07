import { IParser, ParserComponentProps } from "../../views/example/description/interfaces"
import { ParserConstructorProps } from "./interfaces"
import Bold from "./components/Bold"

export default class BoldParser implements IParser {

    private readonly child: string

    constructor( { node }: ParserConstructorProps ) {
        this.child = node.children[0].text
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return Bold({ child: this.child, key })
    }

    static create( { node }: ParserConstructorProps ): BoldParser {
        return new BoldParser({ node })
    }
}