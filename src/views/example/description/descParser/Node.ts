import * as cheerio from 'cheerio'
import { Element, Text } from "domhandler"
import { INode, NodeType } from './interfaces'

export type TNode =  Element | Text
export default class Node implements INode {

    private readonly node: TNode
    private readonly $: cheerio.CheerioAPI

    constructor({node, $}: {node: TNode, $: cheerio.CheerioAPI}) {
        this.node = node
        this.$ = $
    }

    public get children(): Node[] {
        if (this.node.type === "text") return []
        return this.node.children.map( child => {
            if ( child.type !== "tag" && child.type !== "text" ) {
                console.log(child, child.type)
                throw new Error("Child is not an Element node")
            }
            return new Node({ node: child, $: this.$ })
        })
    }

    public get type(): NodeType {
        if (this.node.type === "text") return "text"
        return (this.node as Element).name as NodeType
    }

    public get text(): string {
        if (this.node.type !== "text") {
            console.error("get text", this.node)
            throw new Error(`Type tag expected text`)
        }
        return this.node.data
    }

    public get parentType(): NodeType {
        const parentNode = this.node.parent as TNode
        const parent = new Node({node: parentNode, $: this.$})
        return parent.type
    }

    public attr( name: string ): string {
        if (this.node.type !== "tag") {
            throw new Error(`Type text expected tag`)
        }
        return this.node.attribs[name]
    }

    public get html(): string {
        const html = this.$(this.node).html()
        if (!html) throw new Error("html didn't expect null")
        return html
    }

    static createByContent({content}: {content: string}): Node {
        const $ = cheerio.load(`<doc>${content}</doc>`);
        return new Node({node: $("doc")[0], $})
    }
}