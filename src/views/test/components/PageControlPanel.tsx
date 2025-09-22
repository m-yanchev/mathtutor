"use client"

import CommonControlBox from "@/views/common/ui/CommonControlBox";
import { UserRole } from "@/essences/user/interfaces";
import EssenceAddingLink from "@/views/common/components/EssenceAddingLink";

type Props = Readonly<{
    userRole: UserRole
}>

export default function PageControlPanel( {userRole}: Props ) {
    return (<>
        { userRole === "ADMIN" && 
        <CommonControlBox>
            <div />
                <EssenceAddingLink essence={"test"} title="Тест" />            
        </CommonControlBox> }
    </>)
}