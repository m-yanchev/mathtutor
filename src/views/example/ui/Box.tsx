export default function Box( { children }: { children: React.ReactNode } ) {
    return (
        <div className="relative flex flex-col gap-[24px] w-full rounded-[16px] border-[1px] p-[24px] border-stroke shadow-drop">
            {children}
        </div>
    )
}