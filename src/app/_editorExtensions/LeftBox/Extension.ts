import { Node } from '@tiptap/react';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from './Component';
import { NodeSelection } from '@tiptap/pm/state';

const LeftBox = Node.create({
    name: "leftBox",
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

    addCommands() {
        return {
            selectLeftBox: () => ({ tr }) => {
                const sel = NodeSelection.create(tr.doc, 0)
                tr.setSelection(sel);
                return true;
            }
        }
    },
})

export default LeftBox