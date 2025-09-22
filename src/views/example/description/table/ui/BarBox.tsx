export default function BarBox( {children}: { children?: React.ReactNode } ) {
    return (
        <div className="flex justify-start w-full gap-[40px]" >
            {children}
        </div>
    )
}