import type { CommandButtonGroupProps } from "../../interfaces";
import AddIcon from "../ui/AddIcon";
import AlignIcon from "../ui/AlignIcon";
import BarBox from "../ui/BarBox";
import CommandListBox from "../ui/CommandListBox";
import DeleteIcon from "../ui/DeleteIcon";
import CommandButton from "./CommandButton";

const tableCommands: CommandButtonGroupProps[] = [{
    type: "add",
    commands: [
        { title: "Стовпець зліва", commandName: "addColumnBefore" },
        { title: "Стовпець справа", commandName: "addColumnAfter" },
    ]
}, {
    type: "add",
    commands: [
        { title: "Рядок вище", commandName: "addRowBefore" },
        { title: "Рядок нижче", commandName: "addRowAfter" },
        { title: "Таблицю", commandName: "insertTable", commandOptions: { withHeaderRow: false } },
    ]
}, {
    type: "delete",
    commands: [
        { title: "Стовпець", commandName: "deleteColumn" },
        { title: "Рядок", commandName: "deleteRow" },
        { title: "Таблицю", commandName: "deleteTable" },
    ]
}, {
    type: "align",
    commands: [
        { title: "За лівим краєм", commandName: "setCellAlignLeft" },
        { title: "За центром", commandName: "setCellAlignCenter" }
    ]
}];

export default function Bar() {

    return (
        <BarBox>
            {tableCommands.map( ( { type, commands }, index ) => (
                <CommandListBox key={index} >
                    { commands.map( (command) => (
                        <CommandButton key={command.commandName} commandName={command.commandName}>
                            { type === "add" && <AddIcon /> }
                            { type === "delete" && <DeleteIcon /> }
                            { type === "align" && <AlignIcon /> }
                            {command.title}
                        </CommandButton>
                    ))}
                </CommandListBox>
            ))}
        </BarBox>
    )
}