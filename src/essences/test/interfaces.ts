import type { Example, ExampleData, ExampleFind, ExampleListFormDataField } from "@/essences/example/interfaces"

export interface Test {
    id: number
    name: string
    relationTestExamples: TestExample[]
    exampleDataList: ExampleData[]
    JSON: string
}

export interface TestData {
    id: number
    name: string
    testExamples: TestExampleData[]
}

export interface TestExample {
    id: number
    example: Example
    number: number
}

export interface TestExampleData {
    id: number
    example: ExampleData
    number: number
}

export interface TestInput {
    name: string
    examples: ExampleFind[]
}

export interface TestFormDataFields {
    name: string
    examples: ExampleListFormDataField
}

export interface TestForList {
    id: number
    name: string
}

export interface TestFields {
    name: string,
    exampleIDList: number[]
}