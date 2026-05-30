'use server'

import { putData } from "@/app/_lib/fetchData"
import { prisma } from "@/dataSources/prisma"
import { TagListFindingParams, TagListFindingResult, TagPuttingParams, TagPuttingResult } from "./interfaces"
import { BEGINING_GET_PARAM } from "./constants"

export async function findTagsInStorageByTitle( {titleBegining}: TagListFindingParams ): Promise<TagListFindingResult> {
    const tags = await prisma.tag.findMany({where: {title: {startsWith: titleBegining}}, select: {title: true, id: true}})
    return { tags }
}

export async function putTagInStorage( { title }: TagPuttingParams ): Promise<TagPuttingResult> {
    const tag = await prisma.tag.findFirst({ where: {title}, select: { id: true } })
    if (tag) return { id: tag.id }
    const { id } = await prisma.tag.create({ data: {title}, select: { id: true } })
    return { id }
}

export async function getTagsFromServer( {titleBegining}: TagListFindingParams ): Promise<TagListFindingResult> {
    const response = await fetch(`/api/tags?${BEGINING_GET_PARAM}=${encodeURIComponent(titleBegining)}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.statusText}`)
    }
    return response.json()
}

export async function putTagInServer( { title }: TagPuttingParams ): Promise<TagPuttingResult> {
    const {id} = await putData<TagPuttingResult, TagPuttingParams>({
        table: "tags",
        request: { title }
    })
    return { id: Number(id) }
}

export async function findTagsInStorageById( tagIdList: number[] ): Promise<TagListFindingResult> {
    const tags = await prisma.tag.findMany( { where: { OR: tagIdList.map( id => ( {id} ) ) } } )
    return { tags }
}