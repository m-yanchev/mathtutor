'use server'

import { prisma } from "@/app/_lib/prisma";
import { Example } from "@/essences/example/interfaces";

export async function getExamples( filter: { tagIdList: number[] } = { tagIdList: [] } ): Promise<Example[]> {
    return prisma.example.findMany( { 
        include: { tags: true }, 
        where: { 
            AND: filter.tagIdList.map( id => ( {
                tags: { some: { id } }
            } ) )
        }
    } )
}