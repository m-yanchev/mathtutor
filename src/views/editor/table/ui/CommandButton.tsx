export default function CommandButton( { children, onClick }: { children?: React.ReactNode, onClick: () => void } ) {
    return (
        <button onClick={onClick} type="button" className="flex items-center gap-[8px]">
            {children}
        </button>
    );
}