import type { Answer, AnswerData } from "@/essences/answer/interfaces"
import type { Tag, TagData, TagFind, TagListFormDataField } from "@/essences/tag/interfaces"

export interface Example {
    id: number
    description: string
    solution: string
    tags: Tag[]
    answer: Answer
    JSON: string
    data: ExampleData
    isSolution: boolean
    href: string
}

export interface ExampleData {
    id: number
    description: string
    solution: string
    tags: TagData[]
    answer: AnswerData
}

export interface ExampleInput {
    description: string
    solution: string
    tags: TagFind[]
    answer: AnswerData
}

export interface ExampleFormDataFields {
    description: string
    solution: string
    tags: TagListFormDataField
    answer: AnswerData
}

export interface ExampleFind {
    id: number
}

export type ExampleListFormDataField = string

// deprication
export type ContentProps = {
    id: number
    content: string
}