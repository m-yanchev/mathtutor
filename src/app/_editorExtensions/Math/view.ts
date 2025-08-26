import latexToHTML from "@/app/_lib/latex"

export default function parse( {html}: { html: string } ): string {

    return html
        .replace(/<math>(.*?)<\/math>/g, (_, formula) => latexToHTML(
            formula
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
        ))
}