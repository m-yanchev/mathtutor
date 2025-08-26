'use client'

type Props = Readonly<{
    title: string;
    children?: React.ReactNode;
    onSubmit: ( formData: FormData ) => void;
    onCancel: () => void
}>;

type FormButtonsProps = Readonly<{
    onCancel: () => void
}>

type CancelButtonProps = Readonly<{
    onClick: () => void
}>

type FormButtonProps = Readonly<{
    className: string
    children: string
    onClick?: () => void
    type?: "button" | "submit"
}>

export default function ModelFormLayout(props: Props) {

    const { title, children, onSubmit, onCancel } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <div className="w-full p-5 border rounded-md bg-gray-50">
            <h2 className="text-xl mb-10">{title}</h2>
            <form onSubmit={handleSubmit} >
                {children}
                <FormButtons onCancel={onCancel} />
            </form>
        </div>
    );
}

function FormButtons({ onCancel }: FormButtonsProps) {
    return (
        <div className="flex justify-between">
            <ConfirmButton />
            <CancelButton onClick={onCancel} />
        </div>
    )
}

function ConfirmButton() {
    return (
        <FormButton className="bg-red-500 hover:bg-red-600" >
            {"Зберегти"}
        </FormButton>
    )
}

function CancelButton({ onClick }: CancelButtonProps) {
    return (
        <FormButton className="bg-blue-500 hover:bg-blue-600" onClick={onClick} type={"button"}>
            {"Вийти без збереження"}
        </FormButton>
    )
}

function FormButton({ className, type = "submit", children, onClick = () => {} }: FormButtonProps) {
    return (
        <button className={`mt-10 px-4 py-2 text-white rounded-sm ${className}`} type={type} onClick={onClick} >
            {children}
        </button>
    )
}