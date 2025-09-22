import Example from "@/essences/example/Example"
import type { ExampleData } from "@/essences/example/interfaces"
import type { Test as ITest, TestData, TestExample } from "./interfaces"

export default class Test implements ITest {
    
    public id: number
    public name: string
    public relationTestExamples: TestExample[]

    protected constructor( data: TestData ) {
        this.id = data.id
        this.name = data.name
        this.relationTestExamples = data.testExamples.map( ({ example, id, number }) => ( {
            id,
            example: Example.create({ id: example.id, description: example.description, answer: example.answer, tags: example.tags }),
            number
        } ) )
    }

    public static getTestByJSON( test: string ) : Test {
        return new Test( JSON.parse(test) as TestData )
    }

    public get data() : TestData {
        return {
            id: this.id,
            name: this.name,
            testExamples: this.relationTestExamples.map( ({ example, id, number }) => ( {
                id,
                number,
                example: example.data
            } ) )
        }
    }

    public get exampleDataList() : ExampleData[] {
        return this.relationTestExamples.map( ({ example }) => example.data )  
    }

    public get JSON() : string {
        return JSON.stringify( {
            id: this.id,
            name: this.name,
            testExamples: this.relationTestExamples.map( ({ example, id, number }) => ( {
                id,
                number,
                example: { id: example.id, description: example.description, answer: example.answer.data } 
            } ) )
        } as TestData )
    }

    public static create( data: TestData ) : Test {
        return new Test( data)
    }
}