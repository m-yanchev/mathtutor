import type { IParser, ParserComponentProps } from "@/views/example/description/interfaces"
import Math from "./components/Math"
import type { ParserConstructorProps } from "@/editor/descParser/interfaces"

export default class MathParser implements IParser {

    private readonly child: string

    constructor( { node }: ParserConstructorProps ) {
        this.child = node.children[0].text
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return Math({ child: this.child, key })
    }

    static create( { node }: ParserConstructorProps ): MathParser {
        return new MathParser({ node })
    }
}