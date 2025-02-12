/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "Examples" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Examples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formulas" (
    "id" SERIAL NOT NULL,
    "latex" TEXT NOT NULL,

    CONSTRAINT "Formulas_pkey" PRIMARY KEY ("id")
);
