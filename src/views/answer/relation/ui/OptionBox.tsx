export default function OptionBox( { children, index }: { children: React.ReactNode, index: number } ) {
    return (
        <div className="flex flex-col lg:flex-row items-baseline gap-[10px] lg:gap-[40px] w-full">
            <span className="text-body-light">{index + 1}.</span>
            {children}
        </div>
    )
}