import PInExample from "@/editor/descParser/ui/PInExample"
import RelationsPartTitle from "@/editor/descParser/ui/RelationsPartTitle"

type Props = Readonly<{
    children: React.ReactNode
    key?: number 
}>

export default function Paragraph( { children, key }: Props ) {
    return (
        <PInExample key={key}>
            {children}
        </PInExample>
    )
}

export function RelationsPartPargraph( { children }: Props ) {
    return (
        <RelationsPartTitle>
            {children}
        </RelationsPartTitle>
    )
}