import { Node } from '@tiptap/core';

const AnswerOption = Node.create({
    name: "answerOption",
    group: "block",
    content: "(paragraph|image)+",

    parseHTML() {
        return [{ tag: 'answer-option' }]
    },

    addAttributes() {
        return {
            index: { parseHTML: element => element.getAttribute('index') }
        }
    },

    renderHTML({ HTMLAttributes }) {
        const index = HTMLAttributes.index.toLowerCase() + "."
        return [ "li", { class: "flex items-baseline gap-[8px]" }, 
            [ "div", { class: "text-body-light" }, index], 
            [ "div", { class: "flex-1" }, 0 ]
        ]
    }
})

export default AnswerOption