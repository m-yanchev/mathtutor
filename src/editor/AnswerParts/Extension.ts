import { Node } from '@tiptap/react';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from './Component';

const AnswerParts = Node.create({
    name: "answerParts",
    group: "block",
    content: "paragraph answerOptions",

    parseHTML() {
        return [{tag: "answer-parts"}]
    },

    renderHTML() {
        return ['answer-parts', {}, 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },
})

export default AnswerParts