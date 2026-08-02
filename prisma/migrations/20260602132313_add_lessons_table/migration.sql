-- CreateTable
CREATE TABLE "lessons" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "teoreticalMaterialId" INTEGER,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lessons_title_key" ON "lessons"("title");

-- AddForeignKey
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_teoreticalMaterialId_fkey" FOREIGN KEY ("teoreticalMaterialId") REFERENCES "teoreticalMaterials"("id") ON DELETE SET NULL ON UPDATE CASCADE;
