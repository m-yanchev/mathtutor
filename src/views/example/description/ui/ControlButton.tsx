export default function ControlButton( { children, onClick }: { children?: React.ReactNode, onClick?: () => void } ) {
    return (
        <button 
            type="button"
            className="flex items-center rounded-[8px] py-[12px] px-[18px] gap-[8px] bg-gray-light shadow-drop cursor-pointer" onClick={onClick}>
            {children}
        </button>
    )
}
