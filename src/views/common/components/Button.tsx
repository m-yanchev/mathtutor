import Link from "next/link"

type Props = Readonly<{
    children: React.ReactNode
    onClick?: () => void
    href?: string
    variant: "small" | "largeOrange" | "largeGray"
    disabled?: boolean
    type?: "button" | "submit"
}>

export default function Button( { children, onClick, href, variant, disabled, type = "button" }: Props ) {

    const sizeClasses = {
        small: "gap-[8px] py-[2px] px-[8px] text-[16px] leading-[20px]",
        large: "gap-[6px] rounded-[8px] py-[10px] px-[18px]",
    }

    const variantClasses = {
        small: `${sizeClasses.small} text-orange fill-orange stroke-orange`,
        largeOrange: `${sizeClasses.large} bg-orange text-gray-light stroke-gray-light fill-gray-light`,
        largeGray: `${sizeClasses.large} bg-stroke stroke-body-dark fill-body-dark`,
    };

    const className = `flex items-center cursor-pointer text-nowrap ${variantClasses[variant]}`

    if ( href ) {
        return (
            <Link href={href} className={className} >
                {children}
            </Link>
        )
    } else  {
        return (
            <button 
                type={ type || "button" } 
                onClick={onClick} 
                className={className} 
                disabled={disabled} >
                {children}
            </button>
        )
    }
}
