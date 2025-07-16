import mathParse from './Math/view'
import imageParse from './Image/view'
import answerRelationsParse from './AnswerRelations/view'
import answerOptionsParse from './AnswerOptions/view'
import answerOptionParse from './AnswerOption/view'
import answerPartsParse from './AnswerParts/view'
import leftBoxParse from './LeftBox/view'

export interface ViewParsingProps {
    html: string
    options?: {
        id: number
    }
}

export default function parse({html, options}: ViewParsingProps) : string {

    return leftBoxParse({ html: answerPartsParse({ html: answerOptionParse({
        html: answerOptionsParse({html: answerRelationsParse({html: imageParse({html: mathParse({html}), options})})})
    })})})
    
}