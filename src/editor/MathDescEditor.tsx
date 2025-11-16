import { Editor, EditorContent } from "@tiptap/react"
import type { CommandProps, IMathDescEditor } from "@/views/example/description/interfaces";

export default class MathDescEditor implements IMathDescEditor {

    private readonly editor: Editor | null;
   
    constructor( editor: Editor | null ) {
        this.editor = editor;
    }

    get data(): string {
        return JSON.stringify( this.editor?.getJSON() || "" )
    }

    public executeCommand( props: CommandProps ): boolean {
        if ( this.editor === null ) {
            return false
        }
        if ( props.options ) {
            return (this.editor.commands as any)[props.name](props.options)
        } else {
            return this.editor.commands[props.name]()
        }
    }

    public EditorContent = ( props: { className?: string } ): React.ReactNode => {
        console.log(this.editor)
        return (
            <EditorContent className={props.className} editor={this.editor} />
        )
    }

    /*public get editorInstance() : Editor | null {
        return this.editor;
    }*/
}
