import Image from "next/image";

type Props = Readonly<{
    src: string
    alt: string
    width: number
    height: number
    className?: string
}>;

export function ExampleDescImage( { src, alt, width, height }: Props ) {
    return (
        <ExampleImage className="flex-none" src={src} alt={alt} width={width} height={height} />
    )
}

export function ExampleAnswerOptionImage( { src, alt, width, height }: Props ) {
    return (
        <ExampleImage src={src} alt={alt} width={width} height={height} />
    )
}

function ExampleImage( { src, alt, width, height, className }: Props ) {
    return (
        <Image className={className} src={src} alt={alt} width={width} height={height} />
    )
}