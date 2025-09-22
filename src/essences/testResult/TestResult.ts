import { getTestResult } from "@/dataSources/testResult/ds";
import ExampleResult from "@/essences/exampleResult/ExampleResult";
import User from "@/essences/user/User";
import type { TestResult as ITestResult, TestResultData } from "./interfaces";

export default class TestResult implements ITestResult {

    public testName = "";
    public exampleResults: ExampleResult[] = [];

    public async getLastByTestIdFromDS( id: number ) : Promise<void> {
        const userId = await User.getUserIdFromSession()
        const dsField: TestResultData = await getTestResult({ testId: id, userId })
        if ( dsField === undefined ) {
            throw new Error(`Result for test with id ${id} not found`)
        }
        this.testName = dsField.test.name
        this.exampleResults = dsField.exampleResults.map( ({ example, result }) => new ExampleResult({ example, result }) )
    }

    public get totalPoints() : number {
        return this.exampleResults.reduce( ( total, exampleResult ) => exampleResult.totalPoints + total, 0 )
    }

    public get resultPoints() : number {
        return  this.exampleResults.reduce( ( result, exampleResult ) => result + exampleResult.resultPoints, 0 )
    }

}