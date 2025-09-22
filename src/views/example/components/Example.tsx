import TagSet from "@/views/tag/components/TagSet";
import { UserRole } from "@/essences/user/interfaces";
import type { ExampleData } from "@/essences/example/interfaces";
import ExampleBox from "@/views/example/ui/ExampleBox";
import ExampleDesc from "../description/components/ExampleDesc";
import TopBox from "../ui/ExampleTopBox";
import ExampleBottomPanel from "./ExampleBottomPanel";
import DeleteButton from "./DeleteButton";

type Props = Readonly<{
    content: ExampleData
    access?: UserRole
}>

export default function Example( { content, access = "GUEST" } : Props ) {

    return (
        <ExampleBox>
            <TopBox>
                <TagSet tags={content.tags} />
                { access === "ADMIN" && 
                <DeleteButton id={content.id} /> }
            </TopBox>
            <ExampleDesc description={content.description} id={content.id} />
            <ExampleBottomPanel correctAnswerValue={content.answer || ""} access={access} id={content.id} />
        </ExampleBox>
    )
}