import { prisma } from "@/dataSources/prisma"
import type { ExampleData, ExampleInput } from "@/essences/example/interfaces"
import type { TagData } from "@/essences/tag/interfaces";
import { ExampleDSItemForGet } from "./interfaces";

export default class Example implements ExampleData {

    public readonly id: number
    public readonly description: string;
    public readonly tags: TagData[];
    public readonly answer: string;

    public constructor( { id, description, tags, answer }: ExampleDSItemForGet ) {
        this.id = id
        this.description = description
        this.tags = tags
        this.answer = answer || ""
    }

    public static getList = async ( filter: { tagIdList: number[] } = { tagIdList: [] } ): Promise<ExampleData[]> => {
        const exampleDSList = await prisma.example.findMany( { 
            include: { tags: true }, 
            where: { 
                AND: filter.tagIdList.map( id => ( {
                    tags: { some: { id } }
                } ) )
            }
        } )
        return exampleDSList.map( exampleDSItem => new Example(exampleDSItem) )
    }

    public static getById = async (id: number): Promise<ExampleData> => {
        const exampleDSItem = await prisma.example.findUnique({
            where: { id }, 
            include: {
                tags: true
            }
        })
        if (!exampleDSItem) {
            throw new Error(`Example with id ${id} not found`)
        }
        return new Example(exampleDSItem)
    }

    public static create = async ( exampleInput: ExampleInput ): Promise<ExampleData> => {
        const exampleDSItem = await prisma.example.create({
            data: { 
                description: exampleInput.description, 
                answer: exampleInput.answer,
                tags: { connect: exampleInput.tags.map( tag => ( { id: tag.id } ) ) }
            },
            include: { tags: true }
        })
        return new Example(exampleDSItem)
    }

    public static updateById = async ( id: number, exampleInput: ExampleInput ): Promise<ExampleData> => {
        const exampleDSItem = await prisma.example.update({
            where: { id },
            data: { 
                description: exampleInput.description, 
                answer: exampleInput.answer,
                tags: { set: exampleInput.tags.map( tag => ( { id: tag.id } ) ) }
            },
            include: { tags: true }
        })
        return new Example(exampleDSItem)
    }
}
