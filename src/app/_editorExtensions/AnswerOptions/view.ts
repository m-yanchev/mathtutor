import { ViewParsingProps } from "../DescriptionParsing"

export default function parse({html} : ViewParsingProps): string {

    const regex = /<answer-options state="(row|col)">(.*?)<\/answer-options>/g

    return html.replace( regex, (_, state, options) => {
        return `<ol class="${state}">${options}</ol>`
    } )
}