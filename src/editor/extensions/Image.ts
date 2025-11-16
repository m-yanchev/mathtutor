import { Node } from '@tiptap/core'
import type { IImageExtensionAttributes, PreviewMap } from '@/essences/editor/image/interfaces'
import type { InsertedImageOptions } from '@/essences/editor/interfaces'
import { ImageHTMLTagAttributes } from '../ImageAttributes'

type ImageExtensionStorage = {
  previewMap: PreviewMap
}

declare module '@tiptap/core' {
    interface ExtensionStorage {
        image: ImageExtensionStorage
    }
    interface Commands<ReturnType> {
        image: {
            insertImage: ( { attrs, file }: InsertedImageOptions ) => ReturnType
        }
    }
}

export interface ImageOptions {
    id?: number | undefined | null
}

const NodeExtension = Node.create({

    name: "image",
    group: "block",
    atom: true,
    defining: false,

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
        const storage = this.editor?.storage as { image: ImageExtensionStorage };
        return [ 'img', {
            class: "order-2 float-right ml-[24px] mb-[24px]",
            ... new ImageHTMLTagAttributes({ 
                parentId: this.options.id, 
                attrs: HTMLAttributes as IImageExtensionAttributes,
                previewMap: storage?.image.previewMap
            })
        } ]
    },

    addCommands() {
        return {
            insertImage: ({ attrs, file }: InsertedImageOptions) => ({ chain, state }) => {
                
                this.storage.previewMap.set( attrs.filename, URL.createObjectURL(file) )
                const runInserting = ( pos: number ) => {
                    chain()
                        .insertContentAt( pos, { type: this.name, attrs } )
                        .focus()
                        .run()
                }

                const pos = () : number => {
                    const { selection } = state;
                    const $pos = state.doc.resolve(selection.from);
                    for (let depth = $pos.depth; depth >= 0; depth--) {
                        const node = $pos.node(depth);
                        if (node.type.name === 'answerOption') {
                            return $pos.start(depth);                        
                        }
                    }
                    return 0;
                }

                runInserting( pos() )
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