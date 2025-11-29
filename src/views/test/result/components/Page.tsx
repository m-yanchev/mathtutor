import { notFound } from "next/navigation"
import { Fragment } from "react/jsx-runtime"
import Header from "@/views/common/ui/HeaderBlockWithBreadCrumbs"
import ControlBox from "@/views/test/ui/ControlBox"
import ExampleResults from "@/views/example/result/components/ResultList"
import TestResult from "@/essences/test/result/TestResult"
import { TESTS_PAGE_TITLE } from "@/views/common/constants"
import PointsForTest from "../ui/PointsForTest"
import ExampleNumbers from "./ExampleNumbers"

type Props = Readonly<{
    id: number
}>

export default async function Page( {id}: Props ) {
    
    const testResult = new TestResult()
    try {
        await testResult.getLastByTestIdFromDS(id)
    } catch ( error ) { 
        console.error(error)
        notFound()
    }

    return (
        <Fragment>
            <Header crumbs={[ { title: TESTS_PAGE_TITLE, href: "/tests" }, { title: testResult.testName, href: "#" } ]} />
            <ControlBox>
                <ExampleNumbers types={testResult.exampleResults.map( ({resultType}) => resultType )} />
                <PointsForTest total={testResult.totalPoints} value={testResult.resultPoints} />
            </ControlBox>
            <ExampleResults results={ testResult.exampleResultViewDataSet } />
        </Fragment>
    ) 
}