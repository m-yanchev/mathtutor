import type { ExampleData } from "@/essences/example/interfaces"
import type { Test as ITest, TestData } from "./interfaces"
import { TestExample } from "./TestExample"

export default class Test implements ITest {
    
    public id: number
    public name: string
    public relationTestExamples: TestExample[]

    protected constructor( data: TestData ) {
        this.id = data.id
        this.name = data.name
        this.relationTestExamples = TestExample.createByDataList( data.testExamples )
    }

    public get data() : TestData {
        return {
            id: this.id,
            name: this.name,
            testExamples: this.relationTestExamples.map( testExample => testExample.data )
        }
    }

    public get exampleDataList() : ExampleData[] {
        return this.relationTestExamples.map( ({ example }) => example.data )  
    }

    public static create( data: TestData ) : Test {
        return new Test( data)
    }
}