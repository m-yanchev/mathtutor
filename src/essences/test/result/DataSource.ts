import TestResultDS from "@/dataSources/test/result/TestResult";
import User from "@/essences/user/User";
import type { TestResultInput } from "./interfaces";
import TestResult from "./TestResult";

export default class DataSource extends TestResult {

    public static async save( inputed: TestResultInput ) : Promise<void> {
        const { userId } = await User.verifySession()        
        await TestResultDS.save( inputed, userId)
    }
}