/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `examples` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "teoreticalMaterials" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "teoreticalMaterials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teoreticalMaterials_title_key" ON "teoreticalMaterials"("title");

-- CreateIndex
CREATE UNIQUE INDEX "examples_description_key" ON "examples"("description");
