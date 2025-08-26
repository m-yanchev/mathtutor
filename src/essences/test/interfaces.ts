import type { Example } from "@/essences/example/interfaces"

export interface TestForList {
    id: number
    name: string
}

export interface TestFields {
    name: string,
    exampleIDList: number[]
}

export interface SingleTest {
    id: number
    name: string
    testExamples: TestExample[]
}

interface TestExample {
    id: number
    example: Example
    number: number
}