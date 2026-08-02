import { TagFind } from "@/essences/tag/interfaces"
import type { ExampleInput as IExampleInput } from "./interfaces"

export default class ExampleInput implements IExampleInput {

    public readonly description: string
    public readonly solution: string
    public readonly tags: TagFind[]
    public readonly answer: string

    constructor( formData: FormData ) {
        this.description = formData.get('description') as string
        this.solution = formData.get('solution') as string
        const tagString = formData.get('tags') as string
        this.tags = tagString ? tagString.split(',').map( id => ( { id: Number(id) } ) ) : []
        this.answer = formData.get('answer') as string
    }

    public static FORM_DATA_FIELDS = {
        description: 'description',
        solution: 'solution',
        tags: 'tags', 
        answer: 'answer'
    }
}