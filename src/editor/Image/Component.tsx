'use client'

import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import Image from "next/image";
import { ImageHTMLTagAttributes } from "@/editor/Image/ImageAttributes";
import type { IImageExtensionAttributes } from "./interfaces";

export default function Component(props: NodeViewProps) {

    const {attrs} = props.node
    const {id} = props.extension.options
    const { alt, width, height, filename, lastmodified } = attrs as IImageExtensionAttributes

    const tagAttrs = new ImageHTMLTagAttributes({ 
        parentId: id, 
        attrs: { 
            filename: filename || "image.png", 
            alt, 
            lastmodified, 
            width, 
            height 
        }, 
        previewMap: props.extension.storage.previewMap
    })

    return (
        <NodeViewWrapper className="desc-image" >
            <Image src={tagAttrs.src} alt={tagAttrs.alt} width={tagAttrs.width} height={tagAttrs.height} priority />
        </NodeViewWrapper>
    )
}