import ExampleDescLeftBox from "@/essences/example/description/descParser/ui/ExampleDescLeftBox"

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