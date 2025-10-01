import BoxXPadding from "./BoxXPadding";

type Props = Readonly<{
    title: string
    children?: React.ReactNode
    className?: string
}>

export default function HeaderBlock( { title, children, className = "" }: Props ) {
    return (
        <BoxXPadding className={`${className} z-5 fill-[#477AE7] sticky -top-[142px] lg:-top-[149px] overflow-hidden flex flex-col justify-between h-[204px] lg:h-[210px] w-full bg-[#356ce5]`} >
            {Array.from({ length: 20 }).map((_, i) => (
                <VerticalLine key={i} left={ 54 + i * 151 } />
            ))}
            {Array.from({ length: 2 }).map((_, i) => (
                <HorizontalLine key={i} top={ 109 + i * 190 } />
            ))}
            <Triangle />
            <Square />
            <Circle />
            <div className="flex items-center justify-start grow">
                <h1 className="z-10 font-bold text-[32px] lg:text-[36px] leading-[40px] lg:leading-[48px] text-gray-light">
                    {title}
                </h1>
            </div>
            {children}
        </BoxXPadding>
    )
}

function VerticalLine( {left}: {left: number} ) {
    const lineStyle = {
        left: `${left}px`
    };
    return (
        <Line className={`inset-y-0 w-[1px]`} style={lineStyle} />
    )
}

function HorizontalLine( {top}: {top: number} ) {
    const lineStyle = {
        top: `${top}px`
    };
    return (
        <Line className={`inset-x-0 h-[1px]`} style={lineStyle} />
    )
}

function Line( { className, style }: { className?: string; style?: React.CSSProperties } ) {
    return (
        <div className={`hidden lg:block absolute bg-[#698BCE] ${className}`} style={style} />
    )
}

function Triangle() {
    return (
        <svg className="hidden lg:block right-[187px] -top-[20px] absolute" width="78" height="79" viewBox="0 0 78 79" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.240831 7.50476C-0.853879 3.01756 3.31946 -0.971984 7.75284 0.323568L73.4404 19.5192C77.8737 20.8147 79.2421 26.4237 75.9034 29.6154L26.4358 76.9046C23.0971 80.0963 17.5554 78.4768 16.4607 73.9896L0.240831 7.50476Z"/>
        </svg>
    )
}

function Square() {
    return (
        <svg className="hidden lg:block right-[122px] top-[36px] absolute" width="91" height="92" viewBox="0 0 91 92" xmlns="http://www.w3.org/2000/svg">
            <rect x="-1.4126" y="45.0034" width="66.8249" height="66.8249" rx="5" transform="rotate(-43.7103 -1.4126 45.0034)"/>
        </svg>
    )
}

function Circle() {
    return (
        <svg className="hidden lg:block right-[57px] top-[122px] absolute" width="74" height="75" viewBox="0 0 74 75" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36.9195" cy="37.5324" r="36.8929" transform="rotate(-43.7103 36.9195 37.5324)" />
        </svg>
    )
}
