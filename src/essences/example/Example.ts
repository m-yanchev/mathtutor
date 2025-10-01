import Answer from "@/essences/answer/Answer"
import { Tag } from "@/essences/tag/interfaces"
import type { ExampleData, Example as IExample } from "./interfaces"

export default class Example implements IExample {

    public id: number
    public description: string
    public tags: Tag[]
    public answer: Answer

    protected constructor( data : ExampleData ) {
        this.id = data.id
        this.description = data.description
        this.answer = Answer.createByData( data.answer )
        this.tags = data.tags
    }

    public get JSON() : string {
        const exampleData: ExampleData = {
            id: this.id,
            description: this.description,
            answer: this.answer.data,
            tags: this.tags
        }
        return JSON.stringify( exampleData as ExampleData )    
    }

    public get data() : ExampleData {
        return {
            id: this.id,
            description: this.description,
            answer: this.answer.data,
            tags: this.tags
        }
    }

    public static create( exampleData: ExampleData ) : Example {
        return new Example( exampleData )
    }

    public static async getAllFromServer() : Promise<Example[]> {
        const response = await fetch('/api/examples', { method: 'GET' })
        if ( !response.ok ) throw new Error(`Failed to fetch examples, status: ${response.status}`)
        const data = await response.json()
        return data.examples.map( (item: ExampleData) => new Example( item ) )
    }
}