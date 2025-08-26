'use server'

import { prisma } from "@/app/_lib/prisma"
import {TestForList} from "@/essences/test/interfaces"

export async function getTests(): Promise<TestForList[]> {
    return prisma.test.findMany()
}