export interface INode {
    children: INode[]
    type: NodeType
    text: string
    parentType: NodeType
    attr: ( name: Attribute ) => string
    html: string
}

export interface ParserConstructorProps {
    node: INode
    id?: number
}

type Attribute = string

export type NodeType = LeftBoxChildNodeType | AnswerOptionChildNodeType | AnswerRelationsPartChildNodeType |
    "doc" | "answer-option" | "math" | "text" | "strong" | "answer-parts" |
    "colgroup" | "tbody" | "tr" | "td" | "left-box"

export type LeftBoxChildNodeType = "p" | "table" | "answer-options" | "answer-relations"
export type AnswerOptionChildNodeType = "p" | "desc-image"
export type AnswerRelationsPartChildNodeType = "p" | "answer-options"

export type TextAlign = "center" | "left"
export type AnswerOptionIndex = "1" | "2" | "3" | "A" | "Б" | "В" | "Г" | "Д" 


