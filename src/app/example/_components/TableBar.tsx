import CommandButton, { type CommandButtonAttributes } from './CommandButton'

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

export default function TableBar() {

    return (
        <div>
            {tableCommands.map((command, index) => (
                <CommandButton key={index} {...command} />
            ))}
        </div>
    )
}