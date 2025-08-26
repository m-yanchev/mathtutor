import { redirect } from "next/navigation";
import { prisma } from "@/app/_lib/prisma";
import { deleteSession, getUserId } from "@/app/_lib/session";

export async function GET() {
    
    const sessionUserId = await getUserId()

    if (sessionUserId) {

        prisma.$transaction( async (tx) => {
            const testResults = await tx.testResult.findMany({
                where: {
                    userId: sessionUserId
                }
            })
            await tx.exampleResult.deleteMany({
                where: {
                    testResultId: { in: testResults.map( ({id}) => id ) }
                }
            })
            await tx.testResult.deleteMany({
                where: {
                    userId: sessionUserId
                }
            })
            await tx.user.delete({
                where: {
                    id: sessionUserId
                }
            })
        } )
        deleteSession()
    }

    redirect("/")
}