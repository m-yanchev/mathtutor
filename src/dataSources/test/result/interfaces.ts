import type { Test, TestResult } from "@/generated/prisma/client"
import { ExampleResultDSItemForGet } from "@/dataSources/example/result/interfaces"

export type TestResultDSItemForGet = 
    Omit< TestResult, 'userId' | 'testId' | 'date' | 'id' > & { 
        test: Omit< Test, 'id' >, 
        exampleResults: ExampleResultDSItemForGet[]
    }