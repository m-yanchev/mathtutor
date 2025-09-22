import TableInExample from "@/views/example/description/descParser/ui/TableInExample"
import TBodyInExampleTable from "@/views/example/description/descParser/ui/TBodyInExampleTable"
import TDInExampleTable from "@/views/example/description/descParser/ui/TDInExampleTable"
import TRInExampleTable from "@/views/example/description/descParser/ui/TRInExampleTable"
import { TextAlign } from "../interfaces"

type ChildrenProps = Readonly<{
    children: React.ReactNode
    key?: number 
}>

type ChildProps = Readonly<{
    child: string
    key?: number 
}>

type TDProps = ChildrenProps & {
    align: TextAlign
}

export function Table({ children, key }: ChildrenProps) {
    return (
        <TableInExample key={key}>
            {children}
        </TableInExample>
    )
}

export function Colgroup({ child, key }: ChildProps) {
    return (
        <colgroup key={key} dangerouslySetInnerHTML={{__html: child}} />
    )
}

export function Body({ children, key }: ChildrenProps) {
    return (
        <TBodyInExampleTable key={key}>
            {children}
        </TBodyInExampleTable>
    )
}

export function TR({ children, key }: ChildrenProps) {
    return (
        <TRInExampleTable key={key}>
            {children}
        </TRInExampleTable>
    )
}

export function TD({ children, key, align }: TDProps) {
    return (
        <TDInExampleTable key={key} align={align} >
            {children}
        </TDInExampleTable>
    )
}