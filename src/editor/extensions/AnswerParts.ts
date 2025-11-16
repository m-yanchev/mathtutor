import { Node } from '@tiptap/core';

const AnswerParts = Node.create({
    name: "answerParts",
    group: "block",
    content: "paragraph answerOptions",

    parseHTML() {
        return [{tag: "answer-parts"}]
    },

    renderHTML() {
        return ['div', { class: "flex flex-col gap-4 text-body-light italic" }, 0]
    },
})

export default AnswerParts