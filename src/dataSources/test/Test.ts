import { 
    Prisma, type Example as ExampleDSItem, type Tag as TagDSItem, type Test as TestDSItem, type TestExample as TestExampleDSItem 
} from "@prisma/client"
import { prisma } from "@/dataSources/prisma"
import type { TestData, TestExampleData, TestInput } from "@/essences/test/interfaces"
import ExampleDS from "@/dataSources/example/Example"

type ExTestDSItem = TestDSItem & { 
    testExamples: ( Omit< TestExampleDSItem, 'testId' | "exampleId" > & { example: ExampleDSItem & { tags: TagDSItem[] } } )[]
}

export default class Test implements TestData  {

    public readonly id: number
    public readonly name: string
    public readonly testExamples: TestExampleData[]

    private constructor( { id, name, testExamples }: ExTestDSItem ) {
        this.id = id
        this.name = name
        this.testExamples = testExamples.map( ({ id, example, number }) => ( {
            id,
            example: new ExampleDS({ id: example.id, description: example.description, answer: example.answer, tags: example.tags }),
            number
        } ) )
    }

    public static getById = async ( id: number ) : Promise<TestData> => {
        const testDSItem = await prisma.test.findUnique({
            where: { id }, 
            include: {
                testExamples: {
                    select: {
                        id: true,
                        example: {
                            include: {
                                tags: true
                            }
                        },
                        number: true
                    }
                }
            }
        })
        if (!testDSItem) {
            throw new Error(`Test with id ${id} not found`)
        }
        return new Test(testDSItem)
    }

    public static getList = async () : Promise<TestData[]> => {
        const testDSList = await prisma.test.findMany({
            include: {
                testExamples: {
                    select: {
                        id: true,
                        example: {
                            include: {
                                tags: true
                            }
                        },
                        number: true
                    }
                }
            }
        })
        return testDSList.map( testDSItem => new Test(testDSItem as ExTestDSItem) )
    }

    public static create = async ( data: TestInput ) : Promise<void> => {
        const { name, examples } = data
        await prisma.test.create({
            data: { name, testExamples: { create: examples.map((example, index) => ({ exampleId: example.id, number: index })) } }
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
                    create: testInput.examples.map((example, index) => ({ exampleId: example.id, number: index }))
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