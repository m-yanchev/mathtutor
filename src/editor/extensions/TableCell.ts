import { TableCell } from '@tiptap/extension-table/cell'
import type { Command, CommandProps } from '@tiptap/core'
import { Node as ProseMirrorNode, ResolvedPos } from '@tiptap/pm/model'

export default TableCell.extend({

    addAttributes() {
        return {
            ...this.parent?.(),
            textAlign: {
                default: 'left',
                renderHTML: (attributes: { textAlign: "left" | "center" }) => {
                    const textAlignClass = attributes.textAlign || 'left'
                    return {
                        class: `border border-black py-1 px-2 text-${textAlignClass}`
                    }
                },
                parseHTML: (element: HTMLElement) => {
                    const className = element.className
                    if (className.includes('tablecell-center')) {
                        return 'center'
                    }
                    return 'left'
                }
            }
        }
    },

    renderHTML({ HTMLAttributes  }) {
        return ['td', { colwidth: HTMLAttributes.colwidth, class: HTMLAttributes.class }, 0]
    },

    addCommands() {
        
        const findParentTableCell = ($pos: ResolvedPos): { depth: number, node: ProseMirrorNode } | null => {
            let depth = $pos.depth
            while (depth > 0) {
                const node = $pos.node(depth)
                if (node.type.name === 'tableCell') {
                    return { depth, node }
                }
                depth--
            }
            return null
        }
        
        const setAlignment = (alignment: "left" | "center") => () : Command => {
            return ({ tr, dispatch, state }: CommandProps) => {
                const { selection } = state
                const { from } = selection
                
                const $pos = state.doc.resolve(from)
                const result = findParentTableCell($pos)
                
                if (!result) {
                    return false
                }
                
                const pos = $pos.before(result.depth)
                
                if (dispatch) {
                    tr.setNodeMarkup(pos, undefined, { textAlign: alignment })
                }
                
                return true
            }
        }

        return {
            ...this.parent?.(),
            setCellAlignLeft: setAlignment('left'),
            setCellAlignCenter: setAlignment('center')
        }
    }
}) 