import { ExampleResult as ExampleResultViewData } from "@/views/example/result/interfaces";
import Answer from "@/essences/answer/Answer";
import Example from "@/essences/example/Example";
import { ExampleResult as IExampleResult, ExampleResultType, ExampleResultData } from "./interfaces";

export default class ExampleResult implements IExampleResult {
    
    public readonly result: Answer
    public readonly example: Example
    private readonly cost: number

    public constructor( { testExample, result }: ExampleResultData ) {
        this.example = Example.create( testExample.example )
        this.result = Answer.createByData( result )
        this.cost = testExample.cost
    }

    public get resultPoints(): number {
        return this.example.answer.correctCount( this.result ) * this.cost
    }

    public get totalPoints(): number {
        return this.example.answer.totalCount * this.cost
    }

    public get resultType(): ExampleResultType {
        if ( this.resultPoints === 0 ) {
            return ExampleResultType.CompletelyWrong
        } else if ( this.resultPoints === this.totalPoints ) {
            return ExampleResultType.CompletelyCorrect
        } else {
            return ExampleResultType.PartiallyCorrect
        }
    }

    public get viewData() : ExampleResultViewData {
        return {
            example: this.example.data,
            result: this.result.data,
            resultPoints: this.resultPoints,
            resultType: this.resultType
        }
    }
}