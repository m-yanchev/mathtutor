import Paragraph from '@tiptap/extension-paragraph';

export default Paragraph.extend({
    addCommands() {
        return {
            
            ...this.parent?.(),

            insertParagraph: () => ({ chain, state, editor }) => {

                let pos = 0;
                let found = false;
                state.doc.descendants((node, nodePos) => {
                    if (node.type.name === 'answerRelations' || node.type.name === 'answerOptions') {
                        found = true;
                        pos = nodePos;
                        return false;
                    }
                });
                if (!found) {
                    const $nodePos = editor.$node("leftBox");
                    if (!$nodePos) return false;
                    pos = $nodePos.to - 2;
                };

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