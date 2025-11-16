import { Node } from "@tiptap/core"

const DescDoc = Node.create({    
    name: "doc",
    topNode: true,
    content: "(image? main (answerOptions|answerRelations)?) | (leftBox image?)",
})

export default DescDoc