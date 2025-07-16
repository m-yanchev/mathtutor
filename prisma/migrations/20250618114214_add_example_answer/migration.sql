/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Examples` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[latex]` on the table `Formulas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Examples" ADD COLUMN     "answer" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Examples_description_key" ON "Examples"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Formulas_latex_key" ON "Formulas"("latex");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_title_key" ON "Tags"("title");
