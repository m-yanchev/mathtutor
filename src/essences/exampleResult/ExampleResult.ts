import Answer from "@/essences/answer/Answer";
import Example from "@/essences/example/Example";
import { ExampleResult as IExampleResult, ExampleResultType, ExampleResultData } from "./interfaces";

export default class ExampleResult implements IExampleResult {
    
    public readonly result: Answer
    public readonly example: Example

    private static readonly CAPACITY = 1;

    public constructor( { example, result }: ExampleResultData ) {
        this.example = Example.create( example )
        this.result = Answer.createByData( result )
    }

    public get resultPoints(): number {
        return this.example.answer.correctCount( this.result ) * ExampleResult.CAPACITY
    }

    public get totalPoints(): number {
        return this.example.answer.totalCount * ExampleResult.CAPACITY
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
}