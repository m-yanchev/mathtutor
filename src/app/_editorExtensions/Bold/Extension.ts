import { Bold } from '@tiptap/extension-bold';


export default Bold.extend({
    addCommands() {
        return {
            ...this.parent?.(),
            markBold: () => ({ chain }) => {
                return chain().focus().toggleBold().run()
            }   
        }
    }
})
