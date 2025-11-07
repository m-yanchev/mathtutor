import { Node } from "@tiptap/core"

const DescDoc = Node.create({
    
    name: "doc",
    topNode: true,
    content: "(leftBox image?) | (main image? (answerOptions|answerRelations)?)",

    renderHTML() {
        return ['div', {class: "flex flex-col lg:flex-row items-start gap-[24px] w-full min-h-[200px]"}, 0]
    }
})

export default DescDoc