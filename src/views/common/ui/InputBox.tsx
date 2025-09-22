export default function InputBox( { label, children, htmlFor }: { label: string, children?: React.ReactNode, htmlFor?: string } ) {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor={htmlFor}>{label}</label>
            <div className="flex items-center w-full gap-[8px]">
                {children}
            </div>
        </div>
    );
}