import { notFound } from "next/navigation"
import { getTestResult } from "../actions"
import { Fragment } from "react/jsx-runtime"
import Header from "../../ui/Header"
import ControlBox from "../../ui/ControlBox"
import { ResultType } from "../../interfaces"
import ExampleNumbers from "../../ui/ExampleNumbers"
import ExampleResults from "./ExampleResults"
import TestResult from "../ui/TestResult"

type Props = Readonly<{
    id: number
}>

export default async function ResultsPage( {id}: Props ) {
    
    const result = await getTestResult(id)
    if (!result) notFound()

    const resultTypes = result.exampleResults.map<ResultType>( ({ answer, testExample }) => (
        answer === testExample.example.answer ? "completelyCorrect" : "completelyWrong"
    ) )
    const total = result.exampleResults.length
    const value = result.exampleResults.reduce( ( value, { answer, testExample } ) => (
        value + ( answer === testExample.example.answer ? 1 : 0 )
    ), 0 )

    return (
        <Fragment>
            <Header title={ result.test.name } />
            <ControlBox>
                <ExampleNumbers results={resultTypes} />
                <TestResult total={total} value={value} />
            </ControlBox>
            <ExampleResults result={result} />
        </Fragment>
    ) 
}