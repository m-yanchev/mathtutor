import MathInExample from "../ui/MathInExample"

type Props = Readonly<{
    child: string
    key?: number 
}>

export default function Math({ child, key }: Props) {
    return (
        <MathInExample key={key}>
            {child}
        </MathInExample>
    )
}