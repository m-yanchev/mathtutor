import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from './Component';

export interface AnswerOptionsAttributes {
    state: "row" | "col";
}

const AnswerOptions = Node.create({
    name: 'answerOptions',
    group: 'block',
    content: '(answerOption answerOption answerOption) | (answerOption answerOption answerOption answerOption answerOption)',
    defining: true,

    parseHTML() {
        return [{ tag: 'answer-options' }];
    },

    addAttributes() {
        return {
            state: { 
                parseHTML: element => element.getAttribute('state')
            }
        };
    },

    renderHTML({ HTMLAttributes }) {
        return ['answer-options', HTMLAttributes, 0];
    },

    addNodeView() {
        return ReactNodeViewRenderer(Component);
    },

    addCommands() {

        return {

            insertAnswerOptions: () => ({ chain }) => {
                return chain().insertContent({
                    type: this.name,
                    attrs: { state: "col" },
                    content: "АБВГД".split("").map(letter => ({
                        type: "answerOption",
                        attrs: { index: letter },
                        content: [{ type: "paragraph", content: [] }]
                    }))
                }).focus().run();
            },

            changeAnswerOptionsInlineStatus: () => ({ view, state, dispatch }) => {
                
                let pos = 0
                let found = false
                state.doc.descendants((node, nodePos) => {
                    if (node.type.name === 'answerRelations') {
                        found = false
                        return
                    }
                    if (!found && node.type.name === 'answerOptions') {
                        pos = nodePos
                        found = true
                    }
                });

                if (!found) return false
             
                const node = state.doc.nodeAt(pos)
                if (!node) return false

                const newState = node.attrs.state === "col" ? "row" : "col"

                if (dispatch) {
                    const tr = state.tr.setNodeMarkup(pos, undefined, { state: newState })
                    dispatch(tr)
                    view.focus()
                }
                
                return true           
            }
        };
    }
});

export default AnswerOptions;