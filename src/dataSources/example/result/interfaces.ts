import type { ExampleResult } from "@prisma/client"
import { TestExampleDSItemForGet } from "../../test/interfaces"

export type ExampleResultDSItemForGet = 
    Omit< ExampleResult, 'id' | 'testResultId' | 'testExampleId' > & { 
        testExample: TestExampleDSItemForGet
    }