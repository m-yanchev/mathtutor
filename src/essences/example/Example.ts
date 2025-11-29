import Answer from "../answer/Answer"
import { Tag } from "../tag/interfaces"
import type { ContentProps, ExampleData, Example as IExample } from "./interfaces"

export default class Example implements IExample {

    public id: number
    public description: string
    public solution: string
    public tags: Tag[]
    public answer: Answer

    protected constructor( data : ExampleData ) {
        this.id = data.id
        this.description = data.description
        this.solution = data.solution
        this.answer = Answer.createByData( data.answer )
        this.tags = data.tags
    }

    public get JSON() : string {
        const exampleData: ExampleData = {
            id: this.id,
            description: this.description,
            solution: this.solution,
            answer: this.answer.data,
            tags: this.tags
        }
        return JSON.stringify( exampleData as ExampleData )    
    }

    public get data() : ExampleData {
        return {
            id: this.id,
            description: this.description,
            solution: this.solution,
            answer: this.answer.data,
            tags: this.tags
        }
    }

    public get isSolution() : boolean {
        return this.solution.trim().length > 0
    }

    public get href() : string {
        return `/example/${this.id}`
    }

    // deprication
    public get contentProps() : ContentProps {
        return {
            id: this.id,
            content: this.description
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

    public static async putContentProps( contentProps: ContentProps ) : Promise<void> {
        const response = await fetch(`/api/example/content-props`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contentProps })
        })
        if ( !response.ok ) throw new Error(`Failed to put contentProps, status: ${response.status}`)
    }

    public static async putContentPropsList( contentPropsList: ContentProps[] ) : Promise<void> {
        const response = await fetch('/api/examples/content-props-list', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contentPropsList })
        })
        if ( !response.ok ) throw new Error(`Failed to put contentPropsList, status: ${response.status}`)
    }
}