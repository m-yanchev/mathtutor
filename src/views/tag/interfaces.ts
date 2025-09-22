export interface TagPuttingParams {
    title: string
}

export interface TagListFindingResult {
    tags: Tag[]
}

export interface TagPuttingResult {
    id: number
}

export interface Tag {
    id: number
    title: string
}

export interface TagListFindingParams {
    titleBegining: string
}