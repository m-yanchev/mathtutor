import ExampleDesc from "@/views/example/description/components/ExampleDesc";
import Number from "@/views/example/number/ui/Number";
import ExampleResult from "@/essences/example/result/ExampleResult";
import ExamplePoints from "../ui/ExamplePoints";
import Result from "./Result";
import { ListBox, ListItemBox } from "@/views/example/ui/ListBox";

type Props = Readonly<{
    results: ExampleResult[]
}>;

export default function ExampleWithResults( {results}: Props ) {

    return (
        <ListBox>
            { results.map( ( { example, result, resultPoints, resultType }, index ) => {
                return (
                    <ListItemBox key={ example.id } >
                        <ExamplePoints number={resultPoints} type={resultType} />
                        <Number value={ index + 1 } />
                        <ExampleDesc id={ example.id } description={ example.description } />
                        <Result value={result} correct={ example.answer } />
                    </ListItemBox>
                )
            } ) }
        </ListBox>
    )
}