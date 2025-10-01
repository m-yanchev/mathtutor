import type { TestExampleData, TestExampleInput } from "@/essences/test/interfaces"
import ExampleDS from "@/dataSources/example/Example"
import { TestExampleDSItemForGet, TestExampleDSItemForSet } from "./interfaces"

export class TestExample implements TestExampleData {

    public readonly example: ExampleDS
    public readonly cost: number
    public readonly id: number
    public readonly number: number

    constructor( { example, cost, id, number }: TestExampleDSItemForGet ) {
        this.example = new ExampleDS(example)
        this.cost = cost
        this.id = id
        this.number = number
    }

    public static createListForSetByInputed( inputedList: TestExampleInput[]): TestExampleDSItemForSet[] {
        return inputedList.map( ( { example, cost }, index ) => ({ exampleId: example.id, cost, number: index }) )
    }
}