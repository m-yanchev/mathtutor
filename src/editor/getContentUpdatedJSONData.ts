import { Editor } from '@tiptap/core'

type OldDocContent = {
    type: "doc",
    content: ( LeftBoxContent | ImageContent )[]
}

type NewDocContent = {
    type: "doc",
    content: ( MainContent | NewImageContent | AnswerOptionsContent | AnswerRelationsContent )[]
}

type LeftBoxContent = {
    type: "leftBox",
    content: ( ParagraphContent | AnswerOptionsContent | AnswerRelationsContent | TableContent )[]
}

type ImageContent = {
    type: "image",
    attrs: { 
        previewurl: string | null, alt: string, width: number, height: number, filename: string | null, lastmodified: number 
    }
}

type MainContent = {
    type: "main",
    content: ( ParagraphContent | TableContent )[]
}

type NewImageContent = {
    type: "image",
    attrs: { 
        alt: string, width: number, height: number, filename: string, lastmodified: number 
    }
}

type AnswerRelationsContent = {
    type: "answerRelations",
    content: AnswerPartsContent[]
}

type AnswerPartsContent = {
    type: "answerParts",
    content: ( ParagraphContent | AnswerOptionsContent )[]
}

type AnswerOptionsContent = {
    type: "answerOptions",
    content: AnswerOptionContent[]
}

type AnswerOptionContent = {
    type: "answerOption",
    attrs: { id: string },
    content: ( ParagraphContent )[]
}

type ParagraphContent = {
    type: "paragraph",
    content: ( TextContent | MathContent | StrongContent )[]
}

type TableContent = {
    type: "table",
    content: TableRowContent[]
}

type TableRowContent = {
    type: "tableRow",
    content: TableCellContent[]
}

type TableCellContent = {
    type: "tableCell",
    attrs: { colspan: number, rowspan: number, colwidth: number[], textAlign: "left" | "center" | "right" },
    content: ( ParagraphContent )[]
}

type TextContent = {
    type: "text",
    text: string
}

type MathContent = {
    type: "math",
    attrs: { formula: string }
}

type StrongContent = {
    type: "text",
    marks: BoldMark[],
    text: string
}
type BoldMark = {
    type: "bold"
}

export default function getContentUpdatedJSONData( editor: Editor ): string {

    if ( !editor ) return 'not ready'
    const json = JSON.stringify( editor.getJSON() )
    const content: OldDocContent | NewDocContent = JSON.parse( json )
    console.log( 'getContentUpdatedJSONData content:', content )
    const updatedContent = updateContentJSONData( content as OldDocContent )
    console.log( 'getContentUpdatedJSONData updatedContent:', updatedContent )
    return JSON.stringify( content.content[0].type === 'leftBox' ? updatedContent : content )
}

function updateContentJSONData( oldContent: OldDocContent ): NewDocContent {

    const docContentList = oldContent.content
    const leftBoxNode = docContentList[0] as LeftBoxContent
    const imageNode = docContentList[1] as ImageContent | undefined
    const leftBoxContent = leftBoxNode.content
    const answerOptionsIndex = leftBoxContent.findIndex( node => node.type === 'answerOptions' )
    const answerRelationsIndex = leftBoxContent.findIndex( node => node.type === 'answerRelations' )
    const mainContent = leftBoxContent.filter( node => node.type === 'paragraph' || node.type === 'table' ) as ( ParagraphContent | TableContent )[]

    const newContent: NewDocContent = {
        type: "doc",
        content: []
    }

    if (imageNode) {
        const newImageNode: NewImageContent = {
            type: "image",
            attrs: {
                alt: imageNode.attrs.alt,
                width: imageNode.attrs.width,
                height: imageNode.attrs.height,
                filename: imageNode.attrs.filename ? imageNode.attrs.filename : 'image.png',
                lastmodified: imageNode.attrs.lastmodified
            }
        }
        newContent.content.push( newImageNode )
    }

    newContent.content.push({ type: "main", content: mainContent })

    if ( answerOptionsIndex !== -1 ) {
        newContent.content.push( leftBoxContent[answerOptionsIndex] as AnswerOptionsContent )
    }

    if ( answerRelationsIndex !== -1 ) {
        newContent.content.push( leftBoxContent[answerRelationsIndex] as AnswerRelationsContent )
    }

    return newContent
}