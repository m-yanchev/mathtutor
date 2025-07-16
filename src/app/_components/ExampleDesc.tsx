import parse from "@/app/_editorExtensions/DescriptionParsing"

type Props = Readonly<{
    id: number
    description: string
    className?: string
}>

export default function ExampleDesc({ id, description, className = "" }: Props) {

    const html = parse({html: description, options: {id}})
    
    return (
        <div className={`example-desc ${className}`} dangerouslySetInnerHTML={{__html: html}}/>
    )
}