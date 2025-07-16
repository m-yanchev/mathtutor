-- CreateTable
CREATE TABLE "testResults" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "testResults_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exampleResults" (
    "id" SERIAL NOT NULL,
    "testResultId" INTEGER NOT NULL,
    "exampleId" INTEGER NOT NULL,
    "answer" TEXT,

    CONSTRAINT "exampleResults_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testResults_userId_testId_date_key" ON "testResults"("userId", "testId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "exampleResults_testResultId_exampleId_key" ON "exampleResults"("testResultId", "exampleId");

-- AddForeignKey
ALTER TABLE "testResults" ADD CONSTRAINT "testResults_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testResults" ADD CONSTRAINT "testResults_testId_fkey" FOREIGN KEY ("testId") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exampleResults" ADD CONSTRAINT "exampleResults_testResultId_fkey" FOREIGN KEY ("testResultId") REFERENCES "testResults"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exampleResults" ADD CONSTRAINT "exampleResults_exampleId_fkey" FOREIGN KEY ("exampleId") REFERENCES "Examples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
