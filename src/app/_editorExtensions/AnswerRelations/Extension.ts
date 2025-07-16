import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import AnswerRelationsComponent from './Component';

export const AnswerRelations = Node.create({
    name: 'answerRelations',
    group: 'block',
    content: 'answerParts answerParts',
    defining: true,

    parseHTML() {
        return [{ tag: 'answer-relations' }]
    },

    renderHTML() {
        return ['answer-relations', {}, 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(AnswerRelationsComponent, {className: "w-fit"});
    },

    addCommands() {
        const indexesArray = ["123", "АБВГД"]
        return {
            insertAnswerRelations: () => ({ chain }) => {
                return chain().insertContent({
                    type: this.name,
                    content: indexesArray.map( indexes => ({
                        type: "answerParts",
                        content: [{
                            type: "paragraph",
                            content: []
                        },{
                            type: "answerOptions",
                            content: indexes.split("").map(letter => ({
                                type: "answerOption",
                                attrs: { index: letter },
                                content: [{type: "paragraph", content: []}]
                            }))
                        }]
                    }) )
                }).focus().run()
            }
        };
    }
});

export default AnswerRelations;