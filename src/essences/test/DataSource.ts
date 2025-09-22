import TestDS from "@/dataSources/test/Test"
import User from "@/essences/user/User"
import type { TestData, TestInput } from "./interfaces"
import Test from "./Test"

export default class DataSource extends Test {

    public static async loadById( id: number ) : Promise<Test> {
        const data: TestData = await TestDS.getById(id)
        data.testExamples = data.testExamples.sort((a, b) => a.number - b.number)
        return new Test(data)
    }

    public static async loadList() : Promise<Test[]> {
        const testList = await TestDS.getList()
        return testList.map(testData => new Test(testData))
    }

    public static async save( testInput: TestInput ) : Promise<void> {
        await User.throwIfNotAdmin()
        await TestDS.create(testInput)
    }

    public static async updateById( id: number, testInput: TestInput ) : Promise<void> {
        await User.throwIfNotAdmin()
        await TestDS.updateById(id, testInput)
    }

    public static async deleteById( id: number ) : Promise<void> {
        await User.throwIfNotAdmin()
        await TestDS.deleteById(id)
    }
}
