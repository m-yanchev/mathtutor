import mathParse from './Math/view'
import imageParse from '@/essences/example/description/images/editorExtension/view'
import answerRelationsParse from './AnswerRelations/view'
import answerOptionsParse from './AnswerOptions/view'
import answerOptionParse from './AnswerOption/view'
import answerPartsParse from './AnswerParts/view'
import leftBoxParse from './LeftBox/view'
import type { ImageOptions } from '@/essences/example/description/images/editorExtension/Extension'

interface ViewParsingProps {
    html: string
    options: {
        image: ImageOptions
    }
}

export default function parse({ html, options }: ViewParsingProps) : string {

    return mathParse({html: leftBoxParse({ html: answerPartsParse({ html: answerOptionParse({
        html: answerOptionsParse({html: answerRelationsParse({html: imageParse({ html, options: options.image })})})
    })})})})
    
}