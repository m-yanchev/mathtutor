type Props = Readonly<{
    title: string;
    children?: React.ReactNode;
    formAction: ( formData: FormData ) => Promise<void>;
    cancelAction: ( formData: FormData ) => Promise<void>
}>;

type FormButtonsProps = Readonly<{
    formAction: ( formData: FormData ) => Promise<void>
    cancelAction: ( formData: FormData ) => Promise<void>
}>

type ConfirmButtonProps = Readonly<{
    action: (formData: FormData) => Promise<void>
}>

type CancelButtonProps = Readonly<{
    action: ( formData: FormData ) => Promise<void>
}>

type FormButtonProps = Readonly<{
    className: string
    children: string
    action: (formData: FormData) => Promise<void>
}>

export default function ModelFormLayout(props: Props) {

    const { 
        title, 
        children, 
        formAction, 
        cancelAction, 
    } = props;

    return (
        <div className="w-full p-5 border rounded-md bg-gray-50">
            <h2 className="text-xl mb-10">{title}</h2>
            <form>
                {children}
                <FormButtons
                    formAction={formAction} 
                    cancelAction={cancelAction} />
            </form>
        </div>
    );
}

function FormButtons({ formAction, cancelAction }: FormButtonsProps) {
    return (
        <div className="flex justify-between">
            <ConfirmButton action={formAction} />
            <CancelButton action={cancelAction} />
        </div>
    )
}

function ConfirmButton({ action }: ConfirmButtonProps) {
    return (
        <FormButton className="bg-red-500 hover:bg-red-600" action={action}>
            {"Зберегти"}
        </FormButton>
    )
}

function CancelButton({ action }: CancelButtonProps) {
    return (
        <FormButton className="bg-blue-500 hover:bg-blue-600" action={action}>
            {"Вийти без збереження"}
        </FormButton>
    )
}

function FormButton({ className, action, children }: FormButtonProps) {
    return (
        <button className={`mt-10 px-4 py-2 text-white rounded-sm ${className}`} formAction={action}>
            {children}
        </button>
    )
}