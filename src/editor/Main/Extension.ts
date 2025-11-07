import { Node } from "@tiptap/core"

const Main = Node.create({
    name: "main",
    content: "(paragraph|table)+",

    renderHTML() {
        return ['div', {class: "flex flex-col gap-[24px] flex-grow"}, 0]
    }
})

export default Main