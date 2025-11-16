import { Node } from '@tiptap/core';

const LeftBox = Node.create({
    name: "leftBox",
    content: "(paragraph|table)+ (answerOptions|answerRelations)?",

    parseHTML() {
        return [{tag: "left-box"}]
    },

    renderHTML() {
        return ['div', {class: "flex flex-col gap-[24px] flex-grow"}, 0]
    },
})

export default LeftBox