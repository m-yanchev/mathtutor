import type { Example as ExampleDSData, Tag as TagDSData } from "@prisma/client";

export type ExampleDSItemForGet = ExampleDSData & { tags: TagDSData[] }