import { Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import ImageComponent from './Component'
import type { IImageEditorNodeAttributes } from '../ImageAttributes'

export interface ImageOptions {
    id?: number | undefined | null
}

const node = Node.create({

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

    parseHTML() {
        return [{ tag: 'desc-image' }]
    },

    addAttributes() {
        return {
            alt: { 
                required: true,
                parseHTML: element => element.textContent,
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
                required: true
            },
            previewurl: {
                required: false
            }
        }
    },

    renderHTML({ HTMLAttributes }: { HTMLAttributes: Record<string, IImageEditorNodeAttributes> }) {
        const { alt, width, height, lastmodified, filename } = HTMLAttributes
        return ['desc-image', {width, height, lastmodified, filename}, alt]
    },

    addNodeView() {
        return ReactNodeViewRenderer(ImageComponent)
    },
    
    addCommands() {
        return {
            insertImage: (attributes: IImageEditorNodeAttributes) => ({ chain, editor, state }) => {

                const runInserting = (pos: number) => {
                    chain()
                        .insertContentAt(pos, {
                            type: this.name,
                            attrs: attributes
                        })
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
    return node.configure({id})
}