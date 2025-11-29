import type { ExampleResult as ExampleResultViewData } from "@/views/example/result/interfaces"
import type { ExampleResult, ExampleResultData, ExampleResultInput } from "@/essences/example/result/interfaces"

export interface TestResult {
    getLastByTestIdFromDS: ( id: number ) => Promise<void>
    totalPoints: number
    resultPoints: number
    testName: string
    exampleResults: ExampleResult[]
    exampleResultViewDataSet: ExampleResultViewData[]
}

export interface TestResultData {
    test: { 
        name: string 
    }
    exampleResults: ExampleResultData[]
}

export interface TestResultInput {
    testId: number
    exampleResults: ExampleResultInput[]
}