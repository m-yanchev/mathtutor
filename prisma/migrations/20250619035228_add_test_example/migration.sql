/*
  Warnings:

  - You are about to drop the `_ExampleToTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ExampleToTest" DROP CONSTRAINT "_ExampleToTest_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExampleToTest" DROP CONSTRAINT "_ExampleToTest_B_fkey";

-- DropTable
DROP TABLE "_ExampleToTest";

-- CreateTable
CREATE TABLE "testExamples" (
    "id" SERIAL NOT NULL,
    "exampleId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "testExamples_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testExamples_exampleId_testId_key" ON "testExamples"("exampleId", "testId");

-- CreateIndex
CREATE UNIQUE INDEX "testExamples_testId_number_key" ON "testExamples"("testId", "number");

-- AddForeignKey
ALTER TABLE "testExamples" ADD CONSTRAINT "testExamples_exampleId_fkey" FOREIGN KEY ("exampleId") REFERENCES "Examples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testExamples" ADD CONSTRAINT "testExamples_testId_fkey" FOREIGN KEY ("testId") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
