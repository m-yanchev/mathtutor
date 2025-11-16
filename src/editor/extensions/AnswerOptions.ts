import { Node } from '@tiptap/core';

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
        const rowClass = "flex-row flex-wrap gap-x-[24px] lg:gap-x-[40px] gap-y-[24px]"
        const colClass = "flex-col gap-[24px]"
        const stateClass = HTMLAttributes.state === "row" ? rowClass : colClass
        return ['ol', { class: `flex ${stateClass} text-body-dark not-italic order-3` }, 0];
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