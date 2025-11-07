import { Node } from '@tiptap/core'
import { ImageExtensionAttributes, ImageHTMLTagAttributes } from './ImageAttributes'
import type { IImageExtensionAttributes, PreviewMap } from './interfaces'

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

const NodeExtension = Node.create({

    name: "image",
    group: "block",
    atom: true,
    selectable: false,
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
                parseHTML: ( element: HTMLElement ) => element.textContent,
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

    parseHTML() {
        return [{ tag: 'desc-image' }]
    },

    renderHTML({ HTMLAttributes }) {
        return ['img', new ImageHTMLTagAttributes({ 
            parentId: this.options.id, 
            attrs: HTMLAttributes as IImageExtensionAttributes,
            previewMap: this.storage.previewMap
        })]
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