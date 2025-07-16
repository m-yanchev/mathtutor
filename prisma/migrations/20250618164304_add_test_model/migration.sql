/*
  Warnings:

  - You are about to drop the `Formulas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExamplesToTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ExamplesToTags" DROP CONSTRAINT "_ExamplesToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExamplesToTags" DROP CONSTRAINT "_ExamplesToTags_B_fkey";

-- DropTable
DROP TABLE "Formulas";

-- DropTable
DROP TABLE "_ExamplesToTags";

-- CreateTable
CREATE TABLE "formulas" (
    "id" SERIAL NOT NULL,
    "latex" TEXT NOT NULL,

    CONSTRAINT "formulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExampleToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExampleToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ExampleToTest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExampleToTest_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "formulas_latex_key" ON "formulas"("latex");

-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "tests"("name");

-- CreateIndex
CREATE INDEX "_ExampleToTag_B_index" ON "_ExampleToTag"("B");

-- CreateIndex
CREATE INDEX "_ExampleToTest_B_index" ON "_ExampleToTest"("B");

-- AddForeignKey
ALTER TABLE "_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExampleToTest" ADD CONSTRAINT "_ExampleToTest_A_fkey" FOREIGN KEY ("A") REFERENCES "Examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExampleToTest" ADD CONSTRAINT "_ExampleToTest_B_fkey" FOREIGN KEY ("B") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
