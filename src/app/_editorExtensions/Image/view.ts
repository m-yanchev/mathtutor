import { ViewParsingProps } from "../DescriptionParsing"

export default function parse({html, options} : ViewParsingProps): string {

    const regex = /<desc-image(?:\s+width="(\d+)")?(?:\s+height="(\d+)")?(?:\s+lastmodified="(\d+)")?>([^<]*)<\/desc-image>/g

    return html.replace( regex, (_, width, height, lastModified, alt) => {
        const attrs = [];
        attrs.push(`src="/examples/${options?.id}/image.png${lastModified ? `?lm=${lastModified}` : ''}"`);
        attrs.push(`alt="${alt}"`);
        if (width) attrs.push(`width="${width}"`);
        if (height) attrs.push(`height="${height}"`);
        return `<img ${attrs.join(' ')}/>`
    } )
}