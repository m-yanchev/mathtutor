import { UserRole } from "@/app/_lib/User"
import { TestForList } from "../interfaces"
import { TestUpdatingBar } from "./TestUpdatingBar"
import TestCard from "../ui/TestCard"
import TestBox from "../ui/TestBox"

type Props = Readonly<{
    content: TestForList
    access?: UserRole
}>

export default function Test({content, access = "GUEST"} : Props) {

    return (
        <TestBox>
        { access === "ADMIN" && 
            <TestUpdatingBar id={content.id} /> }
            <TestCard test={content} />
        </TestBox>
    )
}