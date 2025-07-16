'use client'

import { DEFAULT_IMAGE_PROPS } from "@/app/_lib/Example";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import Image, { ImageLoaderProps } from "next/image";

export default function Component(props: NodeViewProps) {
    const {attrs} = props.node
    const {alt, src, width, height} = attrs
    const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}${attrs.lastmodified ? `&lm=${attrs.lastmodified}` : ''}`;
    }
    return (
        <NodeViewWrapper>
            { DEFAULT_IMAGE_PROPS.src === src ?
                <Image 
                    src={src} 
                    alt={alt} 
                    width={DEFAULT_IMAGE_PROPS.width} 
                    height={DEFAULT_IMAGE_PROPS.height} 
                    style={ { width, height } }
                    priority
                    loader={imageLoader} /> :
                <Image src={src} alt={alt} width={width} height={height} priority loader={imageLoader} /> }
        </NodeViewWrapper>
    )
}