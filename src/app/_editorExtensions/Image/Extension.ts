import { Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import ImageComponent from './Component'
import { getSourceImage } from '@/app/_lib/Example'

interface ImageAttributes {
    id?: number
    src?: string | null
    lastModified?: string
    alt: string
    width: number
    height: number
}

export default Node.create({

    name: "image",
    group: "block",
    atom: true,
    selectable: true,
    draggable: false,

    parseHTML() {
        return [{ tag: 'desc-image' }]
    },

    addAttributes() {
        return {
            src: {
                default: getSourceImage({ id: 0 }),
            },
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
                default: "0"
            },
        }
    },

    renderHTML({ HTMLAttributes }) {
        const { alt, width, height, lastModified} = HTMLAttributes
        return ['desc-image', {width, height, lastModified}, alt]
    },

    addNodeView() {
        return ReactNodeViewRenderer(ImageComponent)
    },
    
    addCommands() {
        return {
            insertImage: (attributes: ImageAttributes) => ({ chain, editor }) => {
                const $nodePos = editor.$node(this.name)
                const pos = editor.$doc.to - 1
                return chain()
                    .insertContentAt($nodePos || pos, {
                        type: this.name,
                        attrs: attributes
                    })
                    .focus()
                    .run()
            },
            setSource: (attributes: { src: string }) => ({ chain }) => {
                return chain()
                    .selectAll()
                    .updateAttributes(this.name, attributes)
                    .focus()
                    .run()
            }
        }
    }
})