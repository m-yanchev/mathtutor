import { AnswerData } from "@/essences/answer/interfaces";
import { ExampleData } from "@/essences/example/interfaces";
import { ExampleResultType } from "@/essences/example/result/interfaces";

export interface ExampleResult {
    example: ExampleData
    result: AnswerData
    resultPoints: number
    resultType: ExampleResultType
}