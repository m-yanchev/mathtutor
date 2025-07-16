/*
  Warnings:

  - You are about to drop the column `exampleId` on the `exampleResults` table. All the data in the column will be lost.
  - You are about to drop the `Examples` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[testResultId,testExampleId]` on the table `exampleResults` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testExampleId` to the `exampleResults` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ExampleToTag" DROP CONSTRAINT "_ExampleToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExampleToTag" DROP CONSTRAINT "_ExampleToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "exampleResults" DROP CONSTRAINT "exampleResults_exampleId_fkey";

-- DropForeignKey
ALTER TABLE "testExamples" DROP CONSTRAINT "testExamples_exampleId_fkey";

-- DropIndex
DROP INDEX "exampleResults_testResultId_exampleId_key";

-- AlterTable
ALTER TABLE "exampleResults" DROP COLUMN "exampleId",
ADD COLUMN     "testExampleId" INTEGER NOT NULL,
ALTER COLUMN "answer" DROP NOT NULL;

-- DropTable
DROP TABLE "Examples";

-- DropTable
DROP TABLE "Tags";

-- CreateTable
CREATE TABLE "examples" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "answer" TEXT,

    CONSTRAINT "examples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "examples_description_key" ON "examples"("description");

-- CreateIndex
CREATE UNIQUE INDEX "tags_title_key" ON "tags"("title");

-- CreateIndex
CREATE UNIQUE INDEX "exampleResults_testResultId_testExampleId_key" ON "exampleResults"("testResultId", "testExampleId");

-- AddForeignKey
ALTER TABLE "testExamples" ADD CONSTRAINT "testExamples_exampleId_fkey" FOREIGN KEY ("exampleId") REFERENCES "examples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exampleResults" ADD CONSTRAINT "exampleResults_testExampleId_fkey" FOREIGN KEY ("testExampleId") REFERENCES "testExamples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
