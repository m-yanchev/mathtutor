import { ExampleAnswerOptionImage, ExampleDescImage } from "@/views/example/description/descParser/ui/ExampleImage"

type Props = Readonly<{
    src: string
    alt: string
    width: number
    height: number
    key?: number 
}>

export function DescImage( { src, alt, width, height, key }: Props ) {
    return (
        <ExampleDescImage src={src} alt={alt} width={width} height={height} key={key} />
    )
}

export function AnswerOptionImage( { src, alt, width, height, key }: Props ) {
    return (
        <ExampleAnswerOptionImage src={src} alt={alt} width={width} height={height} key={key} />
    )
}