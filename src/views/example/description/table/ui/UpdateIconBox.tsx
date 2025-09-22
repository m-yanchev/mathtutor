export default function UpdateIconBox( {children}: { children?: React.ReactNode } ) {
    return (
        <div className="size-[16px] flex justify-center items-center">
            {children}
        </div>
    );
}