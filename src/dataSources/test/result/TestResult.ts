import type { TestResultData, TestResultInput } from "@/essences/test/result/interfaces"
import { prisma } from "@/dataSources/prisma"
import { TestExample } from "../TestExample"
import { TestResultDSItemForGet } from "./interfaces"

export default class TestResult implements TestResultData {

    public readonly test
    public readonly exampleResults

    private constructor( { test, exampleResults }: TestResultDSItemForGet ) {
        this.test = test
        this.exampleResults = exampleResults.map( ({ testExample, answer }) => ({
            testExample: new TestExample(testExample),
            result: answer || ""
        }) )
    }

    public static async load( { testId, userId }: { testId: number, userId: number } ) : Promise<TestResultData> {
        const result = await prisma.testResult.findFirst({
            where: { testId, userId }, 
            orderBy: { date: 'desc' },
            select: {
                test: {
                    select: {
                        name: true
                    },
                },
                exampleResults: {
                    select: {     
                        testExample: {
                            select: {
                                id: true,
                                example: {
                                    include: {
                                        tags: true
                                    },
                                },
                                number: true,
                                cost: true
                            }
                        },
                        answer: true
                    }
                }
            }
        })
        if (!result) {
            throw new Error(`Result for test with id ${testId} not found`)
        }
        return new TestResult(result)    
    }

    public static async save( inputed: TestResultInput, userId: number ) : Promise<void> {
        await prisma.testResult.create({
            data: {
                testId: inputed.testId,
                userId,
                exampleResults: {
                    create: inputed.exampleResults.map( result => ({
                        testExampleId: result.testExampleId,
                        answer: result.answer
                    }))
                }
            }
        }) 
    }
}