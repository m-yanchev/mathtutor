"use client"

import { useState } from "react"
import BottomPanelBox from "../ui/BottomPanelBox"
import NumberAnswer from "../answers/ui/NumberAnswer"
import AnswerVisibleButton from "../answers/ui/AnswerVisibleButton"
import { UserRole } from "@/app/_lib/User"
import EssenceEditingLink from "@/essences/topLevelLayout/components/EssnceEditingLink"

type Props = Readonly<{
    id: number
    value: string | null
    access?: UserRole
}>

export default function BottomPanel( { value, access = "GUEST", id }: Props ) {

    const [ visible, setVisible ] = useState<boolean>( access === "ADMIN" )

    if ( value === null ) return null

    const handleClick = () => {
        setVisible( prev => !prev )
    }

    return (
        <BottomPanelBox>
            <NumberAnswer value={value} visible={visible}/>
            { access === "ADMIN" ?
                <EssenceEditingLink essence="example" id={id} /> :
                <AnswerVisibleButton answerVisible={visible} onClick={handleClick} />
            }
        </BottomPanelBox>
    )
}