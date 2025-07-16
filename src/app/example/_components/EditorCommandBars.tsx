'use client';

import { useEditor } from "./EditorProvider";

interface CommandButtonAttributes {
    title: string,
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}

type CommandName = "insertTable" | "deleteTable" | "addColumnBefore" | "addColumnAfter" | "addRowBefore" | "addRowBefore" | 
                    "addRowAfter" | "deleteColumn" | "deleteRow" | "insertAnswerOptions" | "changeAnswerOptionsInlineStatus" |
                    "insertAnswerRelations" | "setCellAlignLeft" | "setCellAlignCenter" | "insertParagraph"

type InsertedTableOptions = {
    withHeaderRow: boolean
}

type BarProps = Readonly<{
    commands: CommandButtonAttributes[];
}>;

type CommandButtonProps = Readonly<CommandButtonAttributes>

const paragraphCommands: CommandButtonAttributes[] = [
    { title: "Додати абзац", commandName: "insertParagraph" },
];

const tableCommands: CommandButtonAttributes[] = [
    { title: "Додати таблицю", commandName: "insertTable", commandOptions: { withHeaderRow: false } },
    { title: "Видалити таблицю", commandName: "deleteTable" },
    { title: "Додати стовпчик зліва", commandName: "addColumnBefore" },
    { title: "Додати стовпчик справа", commandName: "addColumnAfter" },
    { title: "Видалити стовпчик", commandName: "deleteColumn" },
    { title: "Додати рядок зверху", commandName: "addRowBefore" },
    { title: "Додати рядок знизу", commandName: "addRowAfter" },
    { title: "Видалити рядок", commandName: "deleteRow" },
    { title: "По лівому краю", commandName: "setCellAlignLeft" },
    { title: "По центру", commandName: "setCellAlignCenter" }
]

const answerCommands: CommandButtonAttributes[] = [
    { title: "Додати варіанти відповідей", commandName: "insertAnswerOptions" },
    { title: "Змінити статус варіантів відповідей", commandName: "changeAnswerOptionsInlineStatus" },
    { title: "Додати зв'язки відповідей", commandName: "insertAnswerRelations" }
]

export function ParagraphBar() {

    return (
        <Bar commands={paragraphCommands} />
    );
}

export function AnswerBar() {

    return (
        <Bar commands={answerCommands} />
    )
}

export function TableBar() {

    return (
        <Bar commands={tableCommands} />
    )
}

function Bar({ commands }: BarProps) {
    return (
        <div className="flex justify-between items-stretch gap-2 mt-4 flex-wrap">
            {commands.map((command, index) => (
                <CommandButton key={index} {...command} />
            ))}
        </div>
    );
}

function CommandButton({title, commandName, commandOptions} : CommandButtonProps) {
    
    const editor = useEditor()
    
    const handleClick = () => {
        editor?.commands[commandName](commandOptions)
    }

    return (
        <button className="p-2 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}