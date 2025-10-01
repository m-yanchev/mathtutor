import type { Test } from "@/essences/test/interfaces"
import { UserRole } from "@/essences/user/interfaces"
import TestCard from "../ui/Card"
import TestBox from "../ui/CardBox"
import { TestUpdatingBar } from "./TestUpdatingBar"

type Props = Readonly<{
    content: Test
    access?: UserRole
}>

export default function Card({content, access = "GUEST"} : Props) {

    return (
        <TestBox>
        { access === "ADMIN" && 
            <TestUpdatingBar id={content.id} /> }
            <TestCard test={content} />
        </TestBox>
    )
}