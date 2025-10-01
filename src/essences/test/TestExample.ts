import Example from "@/essences/example/Example"
import type { TestExample as ITestExample, TestExampleData } from "./interfaces"
import { ExampleData } from "../example/interfaces"

export class TestExample implements ITestExample {

    public readonly example: Example
    public readonly cost: number
    private readonly _id?: number
    private readonly _number?: number

    private constructor( { example, cost, id, number }: { example: ExampleData, cost: number, id?: number, number?: number } ) {
        this.example = Example.create( example )
        this.cost = cost
        this._id = id
        this._number = number
    }

    public get id() : number {
        if ( !this._id ) {
            throw new Error("TestExample id is undefined")
        }
        return this._id
    }

    private get number() : number {
        if ( this._number === undefined ) {
            throw new Error("TestExample number is undefined")
        }
        return this._number
    }

    public get data() : TestExampleData {        
        return {
            example: this.example.data,
            cost: this.cost,
            id: this.id,
            number: this.number
        }
    }

    public static createByData( data: TestExampleData ) : TestExample {
        return new TestExample( data )
    }

    public static createByDataList( dataList: TestExampleData[] ) : TestExample[] {
        return dataList.map( data => new TestExample( data ) )
    }

    public static createByExample( example: Example ) : TestExample {
        return new TestExample({ example: example.data, cost: 1 })
    }
}