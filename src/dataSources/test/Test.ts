import { Prisma } from "@prisma/client"
import { prisma } from "@/dataSources/prisma"
import type { TestData, TestExampleData, TestInput } from "@/essences/test/interfaces"
import { TestDSItemForGet } from "./interfaces"
import { TestExample } from "./TestExample"

export default class Test implements TestData  {

    public readonly id: number
    public readonly name: string
    public readonly testExamples: TestExampleData[]

    private constructor( { id, name, testExamples }: TestDSItemForGet ) {
        this.id = id
        this.name = name
        this.testExamples = testExamples.map( testExample => new TestExample(testExample) )
    }

    private static readonly testInclude = {
        testExamples: {
            select: {
                id: true,
                example: {
                    include: {
                        tags: true
                    }
                },
                cost: true,
                number: true
            }
        }
    }

    public static getById = async ( id: number ) : Promise<TestData> => {
        const testDSItem = await prisma.test.findUnique({
            where: { id }, 
            include: Test.testInclude
        })
        if (!testDSItem) {
            throw new Error(`Test with id ${id} not found`)
        }
        return new Test(testDSItem)
    }

    public static getList = async () : Promise<TestData[]> => {
        const testDSList = await prisma.test.findMany({
            include: Test.testInclude
        })
        return testDSList.map( testDSItem => new Test(testDSItem) )
    }

    public static create = async ( imputed: TestInput ) : Promise<void> => {
        const { name, testExamples } = imputed
        await prisma.test.create({
            data: { 
                name, 
                testExamples: { 
                    create: TestExample.createListForSetByInputed( testExamples )
                } 
            }
        })
    }

    public static updateById = async ( id: number, testInput: TestInput ) : Promise<void> => {

        const testExamples = await prisma.testExample.findMany({
            where: { testId: id },
            select: { id: true }
        })

        const deleteExampleResults = prisma.exampleResult.deleteMany({
            where: { OR: testExamples.map( ({id}) => ({ testExampleId: id }) ) }
        })
        const updateTest = prisma.test.update({ 
            where: { id }, 
            data: { 
                name: testInput.name, 
                testExamples: {
                    deleteMany: {},
                    create: TestExample.createListForSetByInputed( testInput.testExamples )
                } 
            } 
        })
        await prisma.$transaction(
            [deleteExampleResults, updateTest], 
            {isolationLevel: Prisma.TransactionIsolationLevel.Serializable,})
    }

    public static async deleteById( id: number ) : Promise<void> {
        const deleteTestExamples = prisma.testExample.deleteMany({
            where: { testId: id }
        })
        const deleteTest = prisma.test.delete({
            where: { id }
        })
        await prisma.$transaction([deleteTestExamples, deleteTest])
    }
}