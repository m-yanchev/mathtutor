import Record from "../ui/Record";

export default function Correct( {value}: { value: string } ) {
    return (
        <Record title="Вірна відповідь:" value={value} />
    )
}