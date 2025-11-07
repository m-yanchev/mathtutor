import StrongInExample from "@/editor/descParser/ui/StrongInExample"

type Props = Readonly<{
    child: string
    key?: number 
}>

export default function Bold({ child, key }: Props) {
    return (
        <StrongInExample key={key}>
            {child}
        </StrongInExample>
    )
}