export default function CommandListBox( {children}: { children?: React.ReactNode } ) {
    return (
        <div className="flex flex-col gap-[12px]">
            {children}
        </div>
    );
}