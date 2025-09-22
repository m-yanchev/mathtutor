import { prisma } from "@/dataSources/prisma"
import type { TestResultData } from "@/essences/testResult/interfaces"

type Props = Readonly<{
    testId: number
    userId: number
}>

export async function getTestResult( { testId, userId }: Props ): Promise<TestResultData> {

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
                    id: true,               
                    testExample: {
                        select: {
                            example: {
                                include: {
                                    tags: true
                                },
                            },
                            number: true
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
    return {
        test: result.test,
        exampleResults: result.exampleResults.map( ({ answer, testExample }) => ( {
            example: {
                id: testExample.example.id,
                description: testExample.example.description,
                answer: testExample.example.answer || "",
                tags: testExample.example.tags.map( tag => ( { id: tag.id, title: tag.title } ) )
            },
            result: answer || ""
        } ) )
    }
}
