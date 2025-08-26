export interface TestResult {
    test: { name: string,  }
    exampleResults: {
        id: number
        answer: string | null
        testExample: {
            example: {
                id: number
                description: string
                answer: string | null
            }
            number: number
        }
    }[]
}

export interface TestResultFields {
    testId: number
    exampleResults: {testExampleId: number, answer: string}[]
}
