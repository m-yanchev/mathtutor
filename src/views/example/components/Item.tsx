import TagSet from "@/views/tag/components/TagSet";
import { UserRole } from "@/essences/user/interfaces";
import type { ExampleData } from "@/essences/example/interfaces";
import Example from "@/essences/example/Example";
import Content from "@/editor/components/Content";
import TopBox from "../ui/ExampleTopBox";
import BottomPanel from "./BottomPanel";
import DeleteButton from "./DeleteButton";
import Solution from "./Solution";

type Props = Readonly<{
    content: ExampleData
    access?: UserRole
    isSolutionDisplay?: boolean
}>

export default function Item( { content, access = "GUEST", isSolutionDisplay = false } : Props ) {

    const example = Example.create(content)

    return (<>
        <TopBox>
            <TagSet tags={example.tags} />
            { access === "ADMIN" && 
            <DeleteButton id={example.id} /> }
        </TopBox>
        <Content content={example.description} id={example.id } type={"condition"} />
        { isSolutionDisplay && 
            <Solution example={example} />
        }
        <BottomPanel 
            access={access} 
            data={example.data} 
            isSolutionDisplay={isSolutionDisplay} />
    </>)
}