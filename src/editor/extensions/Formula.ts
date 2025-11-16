import { Node } from '@tiptap/core'
import viewRenderer from '../viewRenderer'
import Formula from '../components/Formula'

interface MathAttributes {
    formula: string
}

export default Node.create({
    name: 'math',
    group: 'inline',
    inline: true,
    atom: true,

    addAttributes() {
        return {
            formula: { 
                parseHTML: element => element.textContent
            },
        }
    },

    renderHTML({ HTMLAttributes  }) {
        return ['math', {}, HTMLAttributes.formula]
    },

    parseHTML() {
        return [{ tag: 'math' }]
    },

    addNodeView() {
        return viewRenderer(Formula)
    },

    addCommands() {
        return {
            insertMath: ({formula}: MathAttributes) => ({ chain }) => {
                chain().insertContent({type: "math", attrs: {formula}}).focus().run()
                return true
            }
        }
    }
})
