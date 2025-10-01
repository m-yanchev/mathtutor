'use client'

import BoxXPadding from "@/views/common/ui/BoxXPadding";

type Props = Readonly<{
    children?: React.ReactNode;
    onSubmit: ( formData: FormData ) => void;
}>;


type FormButtonProps = Readonly<{
    className: string
    children: string
    onClick?: () => void
    type?: "button" | "submit"
}>

export default function ModelFormLayout(props: Props) {

    const { children, onSubmit } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} >
            {children}
            <FormButtons />
        </form>
    );
}

function FormButtons() {
    return (
        <BoxXPadding>
            <ConfirmButton />
        </BoxXPadding>
    )
}

function ConfirmButton() {
    return (
        <FormButton className="bg-red-500 hover:bg-red-600" >
            {"Зберегти"}
        </FormButton>
    )
}

function FormButton({ className, type = "submit", children, onClick = () => {} }: FormButtonProps) {
    return (
        <button className={`mt-10 px-4 py-2 text-white rounded-sm cursor-pointer ${className}`} type={type} onClick={onClick} >
            {children}
        </button>
    )
}