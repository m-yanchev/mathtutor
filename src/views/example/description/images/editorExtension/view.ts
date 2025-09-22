import { ImageHTMLTagAttributes } from "../ImageAttributes"
import type { ImageOptions } from "./Extension"

type Props = {
    html: string,
    options: ImageOptions | undefined
}

export default function parse({html, options} : Props): string {

    const regex = /<desc-image(?:\s+width="(\d+)")?(?:\s+height="(\d+)")?(?:\s+lastmodified="(\d+)")?(?:\s+filename="([^<]*)")?>([^<]*)<\/desc-image>/g

    return html.replace( regex, (_, width, height, lastmodified, filename, alt) => {

        const tagAttrs = new ImageHTMLTagAttributes({ 
            parentId: options?.id, 
            attrs: { filename: filename || "image.png", alt, lastmodified, width, height } 
        })

        const attrs = [];
        attrs.push( `src="${tagAttrs.src}"` );
        attrs.push( `alt="${tagAttrs.alt}"` );
        attrs.push( `width="${tagAttrs.width}"` );
        attrs.push( `height="${tagAttrs.height}"` );

        return `<img ${attrs.join(' ')}/>`
    } )
}