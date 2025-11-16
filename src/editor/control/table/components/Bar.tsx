import { CommandName, type CommandButtonGroupProps } from "@/essences/editor/interfaces";
import AddIcon from "@/views/editor/table/ui/AddIcon";
import AlignIcon from "@/views/editor/table/ui/AlignIcon";
import BarBox from "@/views/editor/table/ui/BarBox";
import CommandListBox from "@/views/editor/table/ui/CommandListBox";
import DeleteIcon from "@/views/editor/table/ui/DeleteIcon";
import CommandButton from "@/editor/control/components/CommandButton";

const tableCommands: CommandButtonGroupProps[] = [{
    type: "add",
    commands: [
        { title: "Стовпець зліва", commandProps: { name: CommandName.AddColumnBefore } },
        { title: "Стовпець справа", commandProps: { name: CommandName.AddColumnAfter } },
    ]
}, {
    type: "add",
    commands: [
        { title: "Рядок вище", commandProps: { name: CommandName.AddRowBefore } },
        { title: "Рядок нижче", commandProps: { name: CommandName.AddRowAfter } },
        { title: "Таблицю", commandProps: { name: CommandName.InsertTable, options: { withHeaderRow: false } } },
    ]
}, {
    type: "delete",
    commands: [
        { title: "Стовпець", commandProps: { name: CommandName.DeleteColumn } },
        { title: "Рядок", commandProps: { name: CommandName.DeleteRow } },
        { title: "Таблицю", commandProps: { name: CommandName.DeleteTable } },
    ]
}, {
    type: "align",
    commands: [
        { title: "За лівим краєм", commandProps: { name: CommandName.SetCellAlignLeft } },
        { title: "За центром", commandProps: { name: CommandName.SetCellAlignCenter } }
    ]
}];

export default function Bar() {

    return (
        <BarBox>
            {tableCommands.map( ( { type, commands }, index ) => (
                <CommandListBox key={index} >
                    { commands.map( (command) => (
                        <CommandButton key={command.commandProps.name} commandProps={command.commandProps}>
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