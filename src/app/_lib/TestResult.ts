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