'use client'

import { Editor, EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import { MathExtension } from "../_lib/editor/MathExtension"
import MathInput from "./MathInput"

type CommandButtonProps = Readonly<{
    title: string,
    editor: Editor,
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}>
type CommandButtonPropsWithoutEditor = Readonly<{
    [Property in keyof CommandButtonProps as Exclude<Property, "editor">]: CommandButtonProps[Property]
}>
type CommandName =  "insertTable" | "addColumnBefore" | "addColumnAfter" | "addRowBefore" | "addRowBefore" | "addRowAfter" | 
                    "deleteColumn" | "deleteRow"
type InsertedTableOptions = {withHeaderRow: boolean}

const extensions = [
    StarterKit, 
    Table.configure({resizable: true}), 
    TableRow, 
    TableCell, 
    TableHeader, 
    Placeholder.configure({ placeholder: "Введіть опис...", emptyEditorClass: "editor-placeholder" }),
    MathExtension
]

const menuButtonPropsArray : CommandButtonPropsWithoutEditor[] = [{
    title: "Додати таблицю",
    commandName: "insertTable",
    commandOptions: {withHeaderRow: false}
}, {
    title: "Додати стовпець перед",
    commandName: "addColumnBefore"
}, {
    title: "Додати стовпець після",
    commandName: "addColumnAfter"
}, {
    title: "Додати рядок перед",
    commandName: "addRowBefore"
}, {
    title: "Додати рядок після",
    commandName: "addRowAfter"
}, {
    title: "Видалити стовпець",
    commandName: "deleteColumn"
}, {
    title: "Видалити рядок",
    commandName: "deleteRow"
}]

export default function DescriptionInput() {

    const editor = useEditor({
        extensions,
        editorProps: {attributes: {class: "desc-editor"}},
        immediatelyRender: false
    })

    return (
        <div className="w-full">
            <div className="flex">
                {editor && menuButtonPropsArray.map(({title, commandName, commandOptions}) => (
                    <CommandButton  key={commandName} 
                                    commandName={commandName} 
                                    title={title} 
                                    commandOptions={commandOptions} 
                                    editor={editor}/>
                ))}
            </div>
            <div>
                <MathInput onAdd={latex => editor?.chain().focus().insertMath({formula: latex}).run()}/>
            </div>
            <EditorContent className="border p-2 m-1 min-h-[200px]" editor={editor}/>            
        </div>
    )
}

function CommandButton({title, editor, commandName, commandOptions} : CommandButtonProps) {

    const handleClick = () => editor.chain().focus()[commandName](commandOptions).run()

    return (
        <button className="p-1 m-1 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}