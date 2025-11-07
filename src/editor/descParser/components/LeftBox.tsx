import ExampleDescLeftBox from "@/editor/descParser/ui/ExampleDescLeftBox"

type Props = Readonly<{
    children: React.ReactNode
}>

export default function LeftBox({ children }: Props) {
    return (
        <ExampleDescLeftBox>
            {children}
        </ExampleDescLeftBox>
    )
}