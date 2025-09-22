import { Answer, AnswerData } from "@/essences/answer/interfaces"
import { Example, ExampleData } from "../example/interfaces"

export interface ExampleResult {
    resultPoints: number
    totalPoints: number
    resultType: ExampleResultType
    result: Answer
    example: Example
}

export interface ExampleResultData {
    example: ExampleData
    result: AnswerData
}

export enum ExampleResultType {
    CompletelyWrong = "completelyWrong",
    PartiallyCorrect = "partiallyCorrect",
    CompletelyCorrect = "completelyCorrect"
}