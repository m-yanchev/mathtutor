import PParser from "./PParser"
import { NodeWithChildrenParser } from "./BaseParsers"
import { IParser, ParserComponentProps } from "../interfaces"
import { ParserConstructorProps, TextAlign } from "./interfaces"
import MathParser from "./MathParser"
import { Table, Body, Colgroup, TR, TD } from "./components/Table"

export default class TableParser extends NodeWithChildrenParser implements IParser {

    constructor( { node }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const creators = {
                "colgroup": ColgroupParser.create,
                "tbody": TBodyParser.create,
            }
            const tagName = child.type
            if ( tagName !== "colgroup" && tagName !== "tbody" )
                throw new Error(`${tagName} tag did't expire in table`)
            return creators[tagName]({node: child})
        })
        super({children})
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return Table({ children: this.childComponents, key })
    }

    static create( { node }: ParserConstructorProps ): TableParser {
        return new TableParser({ node })
    }
}

export class ColgroupParser implements IParser {

    private readonly child: string

    constructor( { node }: ParserConstructorProps ) {
        this.child = node.html
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return Colgroup({ child: this.child, key })
    }

    static create( { node }: ParserConstructorProps ): ColgroupParser {
        return new ColgroupParser({ node })
    }
}

export class TBodyParser extends NodeWithChildrenParser implements IParser {

    constructor( { node }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const creators = {
                "tr": TRParser.create,
            }
            const tagName = child.type
            if ( tagName !== "tr" )
                throw new Error(`${tagName} tag did't expire in table tbody`)
            return creators[tagName]({node: child})
        })
        super({children})
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return Body({ children: this.childComponents, key })
    }

    static create( { node }: ParserConstructorProps ): TBodyParser {
        return new TBodyParser({ node })
    }
}

export class TRParser extends NodeWithChildrenParser implements IParser {

    constructor( { node }: ParserConstructorProps ) {
        const children = node.children.map( child => {
            const creators = {
                "td": TDParser.create,
            }
            const tagName = child.type
            if ( tagName !== "td" )
                throw new Error(`${tagName} tag did't expire in table tr`)
            return creators[tagName]({node: child})
        })
        super({children})
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return TR({ children: this.childComponents, key })
    }

    static create( { node }: ParserConstructorProps ): TRParser {
        return new TRParser({ node })
    }
}

export class TDParser extends NodeWithChildrenParser implements IParser {

    private readonly align: TextAlign
    constructor( { node }: ParserConstructorProps ) {

        const children = node.children.map( child => {
            const creators = {
                "p": PParser.create,
                "math": MathParser.create,                
            }
            const tagName = child.type
            if ( tagName !== "p" && tagName !== "math" )
                throw new Error(`${tagName} tag did't expire in table td`)
            return creators[tagName]({node: child})
        })
        super({children})

        const alignClass = node.attr("class")
        this.align = alignClass === "tablecell-left" ? "left" : "center"
    }

    public Component = ( {key}: ParserComponentProps ) => {
        return TD({ children: this.childComponents, key, align: this.align })
    }

    static create( { node }: ParserConstructorProps ): TDParser {
        return new TDParser({ node })
    }
}


