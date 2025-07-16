type ModelFormLayoutProps = Readonly<{
    title: string;
    children?: React.ReactNode;
    formAction: (formData: FormData) => Promise<void>;
    cancelAction: () => Promise<void>
    confirmButtonText?: string;
    cancelButtonText?: string;
}>;

type FormButtonsProps = Readonly<{
    formAction: (formData: FormData) => Promise<void>
    cancelAction: () => Promise<void>
    confirmButtonText: string;
    cancelButtonText: string;
}>

type ConfirmButtonProps = Readonly<{
    action: (formData: FormData) => Promise<void>
    children: string
}>

type CancelButtonProps = Readonly<{
    action: () => Promise<void>
    children: string
}>

type FormButtonProps = Readonly<{
    className: string
    children: string
    action: (formData: FormData) => Promise<void>
}>

export default function ModelFormLayout(props: ModelFormLayoutProps) {
    const { title, children, formAction, cancelAction, confirmButtonText = "Зберегти", cancelButtonText= "Вийти без збереження" } = props;
    return (
        <div className="w-full p-5 border rounded-md bg-gray-50">
            <h2 className="text-xl mb-10">{title}</h2>
            <form>
                {children}
                <FormButtons 
                    formAction={formAction} 
                    cancelAction={cancelAction} 
                    confirmButtonText={confirmButtonText} 
                    cancelButtonText={cancelButtonText} />
            </form>
        </div>
    );
}

function FormButtons({ formAction, cancelAction, confirmButtonText, cancelButtonText }: FormButtonsProps) {
    return (
        <div className="flex justify-between">
            <ConfirmButton action={formAction}>{confirmButtonText}</ConfirmButton>
            <CancelButton action={cancelAction}>{cancelButtonText}</CancelButton>
        </div>
    )
}

function ConfirmButton({ action, children }: ConfirmButtonProps) {
    return (
        <FormButton className="bg-red-500 hover:bg-red-600" action={action}>
            {children}
        </FormButton>
    )
}

function CancelButton({ action, children }: CancelButtonProps) {
    return (
        <FormButton className="bg-blue-500 hover:bg-blue-600" action={action}>
            {children}
        </FormButton>
    )
}

function FormButton({ className, action, children }: FormButtonProps) {
    return (
        <button className={`mt-10 px-4 py-2 text-white rounded ${className}`} formAction={action}>
            {children}
        </button>
    )
}