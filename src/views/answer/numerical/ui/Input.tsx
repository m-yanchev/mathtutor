import TextInput from "@/views/common/ui/TextInput";

type Props = Readonly<{
    onInput: ( value: string ) => void
}>;

export default function Input( {onInput}: Props ) {

    const handleInput = ( event: React.FormEvent<HTMLInputElement> ) => {
        const inputedValue = event.currentTarget.value;
        onInput( inputedValue );
    }

    return (
        <TextInput
            className="lg:w-[686px] h-[48px] py-[12px]"
            onChange={handleInput}
            placeholder="Введіть відповідь" />
    )
}