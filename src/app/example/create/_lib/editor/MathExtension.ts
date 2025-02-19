import { Node, mergeAttributes } from '@tiptap/core'
import katex from 'katex'
import 'katex/dist/katex.min.css'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mathExtension: {
            insertMath: (props : {formula: string}) => ReturnType
        }
    }
  }

export const MathExtension = Node.create({
    name: 'math',
    group: 'inline',
    inline: true,
    atom: true,

    addAttributes() {
        return {
            formula: { default: '' },
        }
    },

    parseHTML() {
        return [{ tag: 'math' }]
    },

    renderHTML({ node }) {
        return ['math', {}, node.attrs.formula]
    },

    addNodeView() {
        return ({ node }) => {
            const container = document.createElement('span')
            container.innerHTML = katex.renderToString(node.attrs.formula, {throwOnError: false})
            return {dom: container}
        }
    },

    addCommands() {
        return {
            insertMath: ({formula}) => ({ chain }) => chain().insertContent({type: "math", attrs: {formula}}).run()
        }
    }
})
