
export default function parse( {html}: { html: string } ): string {

    const regex = /<answer-option index="([А-Д1-3])">(.*?)<\/answer-option>/g

    return html.replace( regex, (_, index, option) => {
        return `<li data-index="${index}">${option}</li>`
    } )
}