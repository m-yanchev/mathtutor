import { Node } from "@tiptap/core"

const ConditionDoc = Node.create({    
    name: "doc",
    topNode: true,
    content: "(image? main (answerOptions|answerRelations)?) | (leftBox image?)",
})

export default ConditionDoc