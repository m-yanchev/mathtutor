-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "public"."formulas" (
    "id" SERIAL NOT NULL,
    "latex" TEXT NOT NULL,

    CONSTRAINT "formulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."testExamples" (
    "id" SERIAL NOT NULL,
    "exampleId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "testExamples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."testResults" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "testResults_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."exampleResults" (
    "id" SERIAL NOT NULL,
    "testResultId" INTEGER NOT NULL,
    "testExampleId" INTEGER NOT NULL,
    "answer" TEXT,

    CONSTRAINT "exampleResults_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."examples" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "answer" TEXT,

    CONSTRAINT "examples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tags" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ExampleToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExampleToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "formulas_latex_key" ON "public"."formulas"("latex");

-- CreateIndex
CREATE UNIQUE INDEX "testExamples_exampleId_testId_key" ON "public"."testExamples"("exampleId", "testId");

-- CreateIndex
CREATE UNIQUE INDEX "testExamples_testId_number_key" ON "public"."testExamples"("testId", "number");

-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "public"."tests"("name");

-- CreateIndex
CREATE UNIQUE INDEX "testResults_userId_testId_date_key" ON "public"."testResults"("userId", "testId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "exampleResults_testResultId_testExampleId_key" ON "public"."exampleResults"("testResultId", "testExampleId");

-- CreateIndex
CREATE UNIQUE INDEX "examples_description_key" ON "public"."examples"("description");

-- CreateIndex
CREATE UNIQUE INDEX "tags_title_key" ON "public"."tags"("title");

-- CreateIndex
CREATE INDEX "_ExampleToTag_B_index" ON "public"."_ExampleToTag"("B");

-- AddForeignKey
ALTER TABLE "public"."testExamples" ADD CONSTRAINT "testExamples_exampleId_fkey" FOREIGN KEY ("exampleId") REFERENCES "public"."examples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."testExamples" ADD CONSTRAINT "testExamples_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."testResults" ADD CONSTRAINT "testResults_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."testResults" ADD CONSTRAINT "testResults_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exampleResults" ADD CONSTRAINT "exampleResults_testExampleId_fkey" FOREIGN KEY ("testExampleId") REFERENCES "public"."testExamples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exampleResults" ADD CONSTRAINT "exampleResults_testResultId_fkey" FOREIGN KEY ("testResultId") REFERENCES "public"."testResults"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ExampleToTag" ADD CONSTRAINT "_ExampleToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

