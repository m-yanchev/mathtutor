'use client';

import type { CommandButtonAttributes } from "../interfaces";
import { useDescEditorContext } from "./EditorProvider";

type BarProps = Readonly<{
    commands: CommandButtonAttributes[];
}>;

type CommandButtonProps = Readonly<CommandButtonAttributes>

const paragraphCommands: CommandButtonAttributes[] = [
    { title: "Додати абзац", commandName: "insertParagraph" },
    { title: "Зробити текст жирним", commandName: "markBold"}
];

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
    
    const editor = useDescEditorContext()
    
    const handleClick = () => {
        editor?.commands[commandName](commandOptions)
    }

    return (
        <button className="p-2 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}