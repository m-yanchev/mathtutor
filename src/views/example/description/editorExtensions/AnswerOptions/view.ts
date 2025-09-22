export default function parse( {html}: { html: string } ): string {
    const regex = /<answer-options(?: state="(row|col)")?>(.*?)<\/answer-options>/g

    return html.replace( regex, (_, state, options) => {
        const finalState = state || "col";
        return `<ol class="${finalState}">${options}</ol>`
    } )
}