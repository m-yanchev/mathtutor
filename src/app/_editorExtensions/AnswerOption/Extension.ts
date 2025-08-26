import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from './Component';

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

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },

    renderHTML({ HTMLAttributes }) {
        return ["answer-option", HTMLAttributes, 0]
    }
})

export default AnswerOption