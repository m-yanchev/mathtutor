import { ExampleResultType } from "@/essences/exampleResult/interfaces";
import { ExampleNumbersState } from "@/views/test/interfaces";
import ExampleNumbersUI from "@/views/test/ui/ExampleNumbers"

export default function ExampleNumbers( { types }: { types: ExampleResultType[] } ) {

    const states = types.map( type => 
        type === "completelyCorrect" ? ExampleNumbersState.CompletelyCorrect : 
        type === "partiallyCorrect" ? ExampleNumbersState.PartiallyCorrect : 
        type === "completelyWrong" ? ExampleNumbersState.CompletelyWrong : 
            ExampleNumbersState.CompletelyWrong );

    return (
        <ExampleNumbersUI states={states} />
    )
}
