import { ViewParsingProps } from "../DescriptionParsing"

export default function parse({html} : ViewParsingProps): string {

    const regex = /<answer-parts>(.*?)<\/answer-parts>/g

    return html.replace( regex, (_, content) => {
        return `<div class="answer-parts">${content}</div>`
    } )
}