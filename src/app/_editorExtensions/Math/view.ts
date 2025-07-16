import latexToHTML from "@/app/_lib/latex"
import { ViewParsingProps } from "../DescriptionParsing"

export default function parse({html}: ViewParsingProps): string {

    return html
        .replace(/<math>(.*?)<\/math>/g, (_, formula) => latexToHTML(
            formula
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
        ))
}