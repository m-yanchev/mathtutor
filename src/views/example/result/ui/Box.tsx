export default function Box( { children }: { children: React.ReactNode } ) {
    return (
        <div className="flex flex-col lg:flex-row items-baseline gap-[10px] lg:gap-[40px] w-full">
            {children}
        </div>
    )
}