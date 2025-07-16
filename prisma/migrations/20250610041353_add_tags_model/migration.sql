-- CreateTable
CREATE TABLE "ExampleTags" (
    "id" SERIAL NOT NULL,
    "exampleID" INTEGER NOT NULL,
    "tagID" INTEGER NOT NULL,

    CONSTRAINT "ExampleTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExampleTags" ADD CONSTRAINT "ExampleTags_exampleID_fkey" FOREIGN KEY ("exampleID") REFERENCES "Examples"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExampleTags" ADD CONSTRAINT "ExampleTags_tagID_fkey" FOREIGN KEY ("tagID") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
