import type { ExampleResult, ExampleResultData } from "@/essences/exampleResult/interfaces"

export interface TestResult {
    getLastByTestIdFromDS: ( id: number ) => Promise<void>
    totalPoints: number
    resultPoints: number
    testName: string
    exampleResults: ExampleResult[]
}

export interface TestResultData {
    test: { name: string }
    exampleResults: ExampleResultData[]
}