import ExampleBox from "@/essences/example/ui/ExampleBox";
import ExampleDesc from "@/essences/example/description/components/ExampleDesc";
import type { TestResult } from "@/app/_lib/TestResult";
import ExampleListBox from "@/essences/examplesPage/ui/ExampleListBox";
import Number from "@/essences/example/number/ui/Number";
import ExampleResult from "../ui/ExampleResult";

export default function ExampleResults( {result}: { result: TestResult } ) {
    return (
        <ExampleListBox>
            {result.exampleResults.map(({ testExample, answer, id }) => (
                <ExampleBox key={id}>
                    <Number value={ testExample.number + 1 } />
                    <ExampleDesc id={testExample.example.id} description={testExample.example.description} />
                    <ExampleResult yourAnswer={ answer || "" } correctAnswer={ testExample.example.answer || "" } />
                </ExampleBox>
            ))}
        </ExampleListBox>
    )
}