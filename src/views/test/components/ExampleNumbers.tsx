import { ExampleNumbersState } from "../interfaces"
import ExampleNumbersUI from "../ui/ExampleNumbers"

export default function ExampleNumbers( { missedList }: { missedList: boolean[] } ) {

    const states = missedList.map( ( missed ) => missed ? ExampleNumbersState.Missed : ExampleNumbersState.Completed );

    return (
        <ExampleNumbersUI states={states} />
    )
}
