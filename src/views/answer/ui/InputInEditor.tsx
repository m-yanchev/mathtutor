import BoxXPadding from "@/views/common/ui/BoxXPadding";
import TextInput from "@/views/common/ui/TextInput";
import { on } from "events";

type Props = Readonly<{
    onChange: ( value: string ) => void,
    value: string,
}>;

export default function InputInEditor( { onChange, value }: Props ) {

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        onChange( event.target.value );
    }

    return (
        <BoxXPadding className="mt-[24px]">
            <TextInput name="answer" onChange={handleChange} value={value} placeholder="Відповідь"/>
        </BoxXPadding>
    )
}