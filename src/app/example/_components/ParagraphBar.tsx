import CommandButton, { type CommandButtonAttributes } from "./CommandButton";

const commands: CommandButtonAttributes[] = [
    { title: "Додати абзац", commandName: "insertParagraph" },
];

export default function ParagraphBar() {

    return (
        <div>
            {commands.map((command, index) => (
                <CommandButton key={index} {...command} />
            ))}
        </div>
    );
}