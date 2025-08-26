'use client'

import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import Image from "next/image";
import { ImageHTMLTagAttributes, type IImageEditorNodeAttributes } from "../ImageAttributes";

export default function Component(props: NodeViewProps) {

    const {attrs} = props.node
    const {id} = props.extension.options
    const { alt, width, height, filename, previewurl, lastmodified } = attrs as IImageEditorNodeAttributes

    const tagAttrs = new ImageHTMLTagAttributes({ 
        parentId: id, 
        attrs: { 
            filename: filename || "image.png", 
            previewurl, 
            alt, 
            lastmodified, 
            width, 
            height 
        }
    })

    return (
        <NodeViewWrapper>
            <Image src={tagAttrs.src} alt={tagAttrs.alt} width={tagAttrs.width} height={tagAttrs.height} priority />
        </NodeViewWrapper>
    )
}