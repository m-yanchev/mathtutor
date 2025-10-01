export interface Answer extends BaseAnswer {
    numerical: NumericalAnswer | undefined
    option: OptionAnswer | undefined
    relation: RelationAnswer | undefined
    type: AnswerType
    correctCount: ( result: Answer ) => number
    totalCount: number
}

export interface NumericalAnswer extends BaseAnswer {
    value: NumericalValue
    isCorrect: ( result: NumericalAnswer ) => boolean
}

export type NumericalInput = string
export type NumericalValue = string

export interface RelationAnswer extends BaseAnswer {
    value: RelationValue
    correctCount: ( result: RelationAnswer ) => number
    maps: OptionMap[]
    optionValues: OptionValue[]
    resultMaps: ( result: RelationAnswer ) => ResultOptionMap[]
}

export type RelationInput = OptionInput[]
export type RelationValue = OptionAnswer[]

export interface OptionAnswer extends BaseAnswer {
    value: OptionValue
    isCorrect: ( result: OptionAnswer ) => boolean
    map: OptionMap
    resultMap: ( result: OptionAnswer ) => ResultOptionMap
}

export type OptionInput = number
export type OptionValue = number
export interface BaseAnswer {
    data: AnswerData
    missed: boolean
}

export type AnswerData = string
export type AnswerInput = string
export type AnswerType = "numerical" | "option" | "relation"

export type ResultOptionMap = ResultOptionType[]
export enum ResultOptionType {
    Correct = "correct",
    None = "none",
    Mistake = "mistake"
}
export type OptionMap = OptionType[]
export enum OptionType {
    Correct = "correct",
    None = "none"
}
