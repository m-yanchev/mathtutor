/*
  Warnings:

  - You are about to drop the `ExampleTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExampleTags" DROP CONSTRAINT "ExampleTags_exampleID_fkey";

-- DropForeignKey
ALTER TABLE "ExampleTags" DROP CONSTRAINT "ExampleTags_tagID_fkey";

-- DropTable
DROP TABLE "ExampleTags";

-- CreateTable
CREATE TABLE "_ExamplesToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExamplesToTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ExamplesToTags_B_index" ON "_ExamplesToTags"("B");

-- AddForeignKey
ALTER TABLE "_ExamplesToTags" ADD CONSTRAINT "_ExamplesToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExamplesToTags" ADD CONSTRAINT "_ExamplesToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
