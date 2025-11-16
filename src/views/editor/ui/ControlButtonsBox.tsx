export default function ControlButtonsBox( {children}: { children?: React.ReactNode } ) {
    return (
        <div className="flex gap-[24px]">
            {children}
        </div>
    )
}
