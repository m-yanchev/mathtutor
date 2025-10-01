import type { Example, ExampleData, ExampleFind } from "@/essences/example/interfaces"

export interface Test {
    id: number
    name: string
    relationTestExamples: TestExample[]
    exampleDataList: ExampleData[]
}

export interface TestData {
    id: number
    name: string
    testExamples: TestExampleData[]
}

export interface TestExample {
    id: number
    example: Example
    cost: number
}

export interface TestExampleData {
    id: number
    example: ExampleData
    cost: number
    number: number
}

export interface TestInput {
    name: string
    testExamples: TestExampleInput[]
}

export interface TestExampleInput {
    example: ExampleFind
    cost: number
}