import { redirect } from "next/navigation";
import { prisma } from "../../../dataSources/prisma";
import User from "@/essences/user/User";

export async function GET() {
    
    const sessionUserId = await User.getUserIdFromSession()

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
        User.logout()
    }

    redirect("/")
}