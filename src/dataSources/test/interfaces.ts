import type { Test, TestExample } from "@prisma/client"
import { ExampleDSItemForGet } from "../example/interfaces"

export type TestDSItemForGet = Test & { testExamples: TestExampleDSItemForGet[] }

export type TestExampleDSItemForGet = 
    Omit< TestExample, 'testId' | "exampleId" > & { 
        example: ExampleDSItemForGet 
    }
export type TestExampleDSItemForSet = Omit< TestExample, 'testId' | 'id' >