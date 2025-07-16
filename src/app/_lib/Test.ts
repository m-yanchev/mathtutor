import type { Example } from "./Example"

export interface TestForList {
    id: number
    name: string
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