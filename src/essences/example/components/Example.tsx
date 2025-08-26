import TagSet from "@/essences/tags/components/TagSet";
import ExampleDesc from "../description/components/ExampleDesc";
import ExampleBox from "@/essences/example/ui/ExampleBox";
import type { UserRole } from "@/app/_lib/User";
import BottomPanel from "./BottomPanel";
import type { Example } from "../interfaces";
import TopBox from "../ui/TopBox";
import { ExampleDeletingButton } from "./ExampleDeletingButton";

type Props = Readonly<{
    content: Example
    access?: UserRole
}>

export default function Example({content, access = "GUEST"} : Props) {

    return (
        <ExampleBox>
            <TopBox>
                <TagSet tags={content.tags} />
                { access === "ADMIN" && 
                <ExampleDeletingButton id={content.id} /> }
            </TopBox>
            <ExampleDesc description={content.description} id={content.id} />
            <BottomPanel value={content.answer || null} access={access} id={content.id} />
        </ExampleBox>
    )
}