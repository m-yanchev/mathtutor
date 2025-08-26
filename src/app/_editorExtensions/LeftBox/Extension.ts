import { Node } from '@tiptap/react';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from './Component';

const LeftBox = Node.create({
    name: "leftBox",
    topNode: true,
    content: "(paragraph|table)+ (answerOptions|answerRelations)?",

    parseHTML() {
        return [{tag: "left-box"}]
    },

    renderHTML() {
        return ['left-box', {}, 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },
})

export default LeftBox