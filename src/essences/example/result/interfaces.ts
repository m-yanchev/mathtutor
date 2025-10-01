import { Answer, AnswerData, AnswerInput } from "@/essences/answer/interfaces"
import { TestExampleData } from "@/essences/test/interfaces"
import { Example } from "../interfaces"

export interface ExampleResult {
    resultPoints: number
    totalPoints: number
    resultType: ExampleResultType
    result: Answer
    example: Example
}

export interface ExampleResultData {
    testExample: TestExampleData
    result: AnswerData
}

export interface ExampleResultInput {
    testExampleId: number
    answer: AnswerInput
}

export enum ExampleResultType {
    CompletelyWrong = "completelyWrong",
    PartiallyCorrect = "partiallyCorrect",
    CompletelyCorrect = "completelyCorrect"
}