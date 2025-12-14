import Paragraph from '@tiptap/extension-paragraph';

export default Paragraph.extend({
    addCommands() {
        return {
            
            ...this.parent?.(),

            insertParagraph: () => ({ chain, state, editor }) => {

                state.doc.descendants((node, nodePos) => {
                    if (node.type.name === 'answerRelations' || node.type.name === 'answerOptions') {
                        return false;
                    }
                });
                    
                const $nodePos = editor.$node("main");
                if (!$nodePos) return false;
                const pos = $nodePos.to - 2;

                return chain()
                    .command(({ tr }) => {
                        const mappingPos = tr.mapping.map(pos); 
                        tr.insert(mappingPos, state.schema.nodes.paragraph.create());
                        return true;
                    })
                    .focus()
                    .run();
            }
        }
    }
})