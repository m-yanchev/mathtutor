/*
  Warnings:

  - Made the column `answer` on table `exampleResults` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "exampleResults" DROP CONSTRAINT "exampleResults_exampleId_fkey";

-- AlterTable
ALTER TABLE "exampleResults" ALTER COLUMN "answer" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "exampleResults" ADD CONSTRAINT "exampleResults_exampleId_fkey" FOREIGN KEY ("exampleId") REFERENCES "testExamples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
