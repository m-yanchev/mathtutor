import { Table } from '@tiptap/extension-table/table'

export default Table.extend({

    addCommands() {
        return {
            ...this.parent?.(),
            insertTable: (options) => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().insertTable?.(options)(params) ?? false
                    })
                    .focus()
                    .run()
            },
            deleteTable: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().deleteTable?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            addColumnBefore: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().addColumnBefore?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            addColumnAfter: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().addColumnAfter?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            addRowBefore: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().addRowBefore?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            addRowAfter: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().addRowAfter?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            deleteColumn: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().deleteColumn?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },
            deleteRow: () => ({ chain }) => {
                return chain()
                    .command((params) => {
                        return this.parent?.().deleteRow?.()(params) ?? false
                    })
                    .focus()
                    .run()
            },            
        }
    },

    renderHTML({ HTMLAttributes  }) {
        return ['table', { class: 'border-collapse', ...HTMLAttributes }, ['tbody', 0]]
    }

})
