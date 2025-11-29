'use client'

import Box from "@/views/common/ui/FormButtonsBox";
import Button from "./Button";

type Props = Readonly<{
    children?: React.ReactNode;
    onSubmit: ( formData: FormData ) => void;
    cancelHref?: string
}>;


type FormButtonProps = Readonly<{
    cancelHref: string
}>

export default function ModelFormLayout(props: Props) {

    const { children, onSubmit, cancelHref = "" } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} >
            {children}
            <FormButtons cancelHref={cancelHref} />
        </form>
    );
}

function FormButtons( {cancelHref}: FormButtonProps ) {
    return (
        <Box>
            <Button variant="small" href={cancelHref} >
                Вийти без збереження
            </Button>
            <Button type="submit" variant="largeOrange" >
                Зберегти
            </Button>
        </Box>
    )
}