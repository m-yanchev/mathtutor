export default function Box( { children }: { children: React.ReactNode } ) {
    return (
        <div className="relative flex flex-col gap-6 w-full rounded-2xl border p-6 border-stroke shadow-drop">
            {children}
        </div>
    )
}