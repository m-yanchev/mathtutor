import { Extension, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import ImageComponent from './Component'
import { ImageExtensionAttributes } from './ImageAttributes'
import type { PreviewMap } from './interfaces'

type ImageExtensionStorage = {
  previewMap: PreviewMap
}

declare module '@tiptap/core' {
  interface ExtensionStorage {
    image: ImageExtensionStorage
  }
}

export interface ImageOptions {
    id?: number | undefined | null
}

const NodeExtension = Extension.create({

    name: "image",
    group: "block",
    atom: true,
    selectable: true,
    draggable: false,

    addOptions(): ImageOptions {
        return {
            id: 0
        }
    },

    addStorage() {
        return {
            previewMap: new Map<string, string>(),
        }
    },

    addAttributes() {
        return {
            alt: { 
                required: true,
            },
            width: { 
                required: true,
            },
            height: {
                required: true,
            },
            lastmodified: {
                required: true
            },
            filename: {
                required: true,
                default: "image.png"
            },
        }
    },

    addNodeView() {
        return ReactNodeViewRenderer(ImageComponent)
    },
    
    addCommands() {
        return {
            insertImage: ( { file, alt }: { file: File, alt: string } ) => ({ chain, editor, state }) => {

                this.storage.image.previewMap.set( file.name, URL.createObjectURL(file) )

                const runInserting = (pos: number) => {
                    chain()
                        .insertContentAt( pos, {
                            type: this.name,
                            attrs: ImageExtensionAttributes.createByFile({ file, alt })
                        } )
                        .focus()
                        .run()
                }

                const { selection } = state;
                const $pos = state.doc.resolve(selection.from);

                for (let depth = $pos.depth; depth >= 0; depth--) {
                    const node = $pos.node(depth);
                    if (node.type.name === 'answerOption') {
                        const pos = $pos.start(depth);
                        runInserting(pos);
                        return true;                        
                    }                
                }

                const pos = editor.$doc.to - 1;
                runInserting(pos)
                return true
            }
        }
    }
})

export default function getImageExtensionWithConfig(options: ImageOptions) {
    
    const imageIsCreating = !Boolean(options.id)
    const id = imageIsCreating ? null : options.id
    return NodeExtension.configure({id})
}