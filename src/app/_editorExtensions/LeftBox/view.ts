import { ViewParsingProps } from "../DescriptionParsing"

export default function parse({html} : ViewParsingProps): string {

    const regex = /<left-box>(.*?)<\/left-box>/g

    return html.replace( regex, (_, content) => {
        return `<div class="left-box">${content}</div>`
    } )
}