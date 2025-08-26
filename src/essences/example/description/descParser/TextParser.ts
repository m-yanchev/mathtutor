import { IParser } from "../interfaces"
import { ParserConstructorProps } from "./interfaces"

export default class TextParser implements IParser {

    private readonly child: string

    constructor( { node }: ParserConstructorProps ) {
        this.child = node.text
    }

    public Component = () => {
        return (
            this.child
        )
    }

    static create( { node }: ParserConstructorProps ): TextParser {
        return new TextParser({ node })
    }
}