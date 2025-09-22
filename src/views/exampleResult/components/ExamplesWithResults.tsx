import ExampleBox from "@/views/example/ui/ExampleBox";
import ExampleDesc from "@/views/example/description/components/ExampleDesc";
import ExampleListBox from "@/views/example/ui/ExampleListBox";
import Number from "@/views/example/number/ui/Number";
import ExampleResult from "@/essences/exampleResult/ExampleResult";
import ExamplePoints from "../ui/ExamplePoints";
import Result from "./Result";

type Props = Readonly<{
    results: ExampleResult[]
}>;

export default function ExampleWithResults( {results}: Props ) {

    return (
        <ExampleListBox>
            { results.map( ( { example, result, resultPoints, resultType }, index ) => {
                return (
                    <ExampleBox key={ example.id } >
                        <ExamplePoints number={resultPoints} type={resultType} />
                        <Number value={ index + 1 } />
                        <ExampleDesc id={ example.id } description={ example.description } />
                        <Result value={result} correct={ example.answer } />
                    </ExampleBox>
                )
            } ) }
        </ExampleListBox>
    )
}