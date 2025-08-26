export default function parse( {html}: { html: string } ): string {

    const regex = /<left-box>(.*?)<\/left-box>/g

    return html.replace( regex, (_, content) => {
        return `<div class="left-box">${content}</div>`
    } )
}