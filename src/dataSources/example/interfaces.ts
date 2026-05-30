import type { Example as ExampleDSData, Tag as TagDSData } from "@/generated/prisma/client";

export type ExampleDSItemForGet = ExampleDSData & { tags: TagDSData[] }