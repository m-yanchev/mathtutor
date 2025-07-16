import ExampleTagList from "@/app/_components/ExampleTagList";
import type { Example } from "@/app/_lib/Example";
import ExampleAnswer from "../../_components/ExampleAnswer";
import ExampleDesc from "@/app/_components/ExampleDesc";
import { ExampleUpdatingBar } from "@/app/_components/UpdatingBar";
import ExampleBox from "@/app/_components/ExampleBox";
import type { UserRole } from "@/app/_lib/User";

type Props = Readonly<{
    content: Example
    access?: UserRole
}>

export default function Example({content, access = "GUEST"} : Props) {

    return (
        <ExampleBox>
            {access === "ADMIN" && 
            <ExampleUpdatingBar id={content.id} />}
            <ExampleDesc description={content.description} id={content.id} />
            <ExampleAnswer value={content.answer || null} />
            <ExampleTagList tags={content.tags} />
        </ExampleBox>
    )
}