'use client';

import { CommandName, type CommandButtonAttributes } from "../interfaces";
import { useDescEditorContext } from "../../../../editor/components/Provider";

type BarProps = Readonly<{
    commands: CommandButtonAttributes[];
}>;

type CommandButtonProps = Readonly<CommandButtonAttributes>

const paragraphCommands: CommandButtonAttributes[] = [
    { title: "Додати абзац", commandProps: { name: CommandName.InsertParagraph } },
    { title: "Зробити текст жирним", commandProps: { name: CommandName.MarkBold } }
];

const answerCommands: CommandButtonAttributes[] = [
    { title: "Додати варіанти відповідей", commandProps: { name: CommandName.InsertAnswerOptions } },
    { title: "Змінити статус варіантів відповідей", commandProps: { name: CommandName.ChangeAnswerOptionsInlineStatus } },
    { title: "Додати зв'язки відповідей", commandProps: { name: CommandName.InsertAnswerRelations } }
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

function CommandButton( { title, commandProps } : CommandButtonProps ) {
    
    const editor = useDescEditorContext()
    
    const handleClick = () => {
        editor?.executeCommand( commandProps )
    }

    return (
        <button className="p-2 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}