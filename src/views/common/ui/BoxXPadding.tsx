type Props = {
    children: React.ReactNode
    className?: string
}

export default function BoxXPadding( { children, className = "" }: Props) {
    return (
        <div className={`w-full px-[16px] lg:px-[200px] ${className}`}>
            {children}
        </div>
    )
}