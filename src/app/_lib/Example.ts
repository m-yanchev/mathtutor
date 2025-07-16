import { TagRecord } from "./tags"

export interface Example {
    id: number
    description: string
    tags: TagRecord[]
    answer: string | null
}

type SourceImageGetterParams = {
    id: number
}

export function getSourceImage({id}: SourceImageGetterParams): string {
    return `/examples/${id}/image.png`        
}

export const DEFAULT_IMAGE_PROPS = {
    src: getSourceImage({id: 0}),
    width: 400,
    height: 600,
}