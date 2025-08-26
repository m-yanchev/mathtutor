export default function parse( {html}: { html: string } ): string {

    const regex = /<answer-relations>(.*?)<\/answer-relations>/g

    return html.replace( regex, (_, content) => {
        return `<div class="answer-relations">${content}</div>`
    } )
}