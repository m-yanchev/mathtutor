import { Tag } from "@/essences/tags/interfaces"

export interface Example {
    id: number
    description: string
    tags?: Tag[]
    answer: string | null
}

export interface ExampleFields {
    description: string,
    tagIDList: number[],
    answer: string | null
}