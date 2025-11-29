export default function TableUpdateIconBox( {children}: { children?: React.ReactNode } ) {
    return (
        <div className="size-[16px] flex justify-center items-center fill-body-dark stroke-body-dark">
            {children}
        </div>
    );
}