import DescParser from "../../../../editor/descParser/DescParser"

type Props = Readonly<{
    id: number
    description: string
}>

export default function ExampleDesc( { id, description }: Props ) {

    const exampleNode = new DescParser({ id, content: description })
    const Example = exampleNode.Component

    return (
        <Example />
    )
}