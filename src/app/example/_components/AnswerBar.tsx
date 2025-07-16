import CommandButton, {type CommandButtonAttributes } from './CommandButton'

const answerCommands: CommandButtonAttributes[] = [
    { title: "Додати варіанти відповідей", commandName: "insertAnswerOptions" },
    { title: "Змінити статус варіантів відповідей", commandName: "changeAnswerOptionsInlineStatus" },
    { title: "Додати зв'язки відповідей", commandName: "insertAnswerRelations" }
]

export default function AnswerBar() {

    return (
        <div>
            {answerCommands.map((command, index) => (
                <CommandButton key={index} {...command} />
            ))}
        </div>
    )
}