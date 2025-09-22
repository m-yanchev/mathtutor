"use client"

import { useState } from "react"
import AnswerVisibleButton from "@/views/answer/ui/VisibleButton"
import CorrectAnswer from "@/views/answer/components/Correct"
import EssenceEditingLink from "@/views/common/components/EssenceEditingLink"
import type { AnswerData } from "@/essences/answer/interfaces"
import { UserRole } from "@/essences/user/interfaces"
import BottomPanelBox from "../ui/ExampleBottomPanelBox"

type Props = Readonly<{
    id: number
    correctAnswerValue: AnswerData
    access?: UserRole
}>

export default function ExampleBottomPanel( { correctAnswerValue, access = "GUEST", id }: Props ) {

    const [ visible, setVisible ] = useState<boolean>( access === "ADMIN" )

    const handleClick = () => {
        setVisible( prev => !prev )
    }

    return (
        <BottomPanelBox>
            <CorrectAnswer data={correctAnswerValue} visible={visible}/>
            { access === "ADMIN" ?
                <EssenceEditingLink essence="example" id={id} /> :
                correctAnswerValue &&
                    <AnswerVisibleButton answerVisible={visible} onClick={handleClick} />
            }
        </BottomPanelBox>
    )
}