import type { Answer, AnswerData } from "@/essences/answer/interfaces"
import type { Tag, TagData, TagFind, TagListFormDataField } from "@/essences/tag/interfaces"

export interface Example {
    id: number
    description: string
    tags: Tag[]
    answer: Answer
    JSON: string
    data: ExampleData
}

export interface ExampleData {
    id: number
    description: string
    tags: TagData[]
    answer: AnswerData
}

export interface ExampleInput {
    description: string,
    tags: TagFind[],
    answer: AnswerData
}

export interface ExampleFormDataFields {
    description: string,
    tags: TagListFormDataField
    answer: AnswerData
}

export interface ExampleFind {
    id: number
}

export type ExampleListFormDataField = string

export type ContentProps = {
    id: number
    content: string
}