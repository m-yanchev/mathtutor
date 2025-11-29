export default function Box( { children }: { children: React.ReactNode } ) {
    return (
        <div className="flex flex-col gap-[16px] w-full">
            {children}
        </div>
    )
}