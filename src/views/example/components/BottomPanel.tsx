"use client"

import { useState } from "react"
import AnswerVisibleButton from "@/views/answer/ui/VisibleButton"
import CorrectAnswer from "@/views/answer/components/Correct"
import EssenceEditingLink from "@/views/common/components/EssenceEditingLink"
import { UserRole } from "@/essences/user/interfaces"
import Example from "@/essences/example/Example"
import BottomPanelBox from "../ui/ExampleBottomPanelBox"
import SolutionButton from "./SolutionButton"
import type { ExampleData } from "@/essences/example/interfaces"

type Props = Readonly<{
    data: ExampleData
    isSolutionButtonDisplay: boolean
    access?: UserRole
}>

export default function BottomPanel( props: Props ) {
    
    const { isSolutionButtonDisplay, access = "GUEST", data } = props
    const example = Example.create(data)
    const answerButtonVisible = !isSolutionButtonDisplay
    const solutionButtonVisible = example.isSolution && !isSolutionButtonDisplay

    const [ visible, setVisible ] = useState<boolean>( access === "ADMIN" || !answerButtonVisible)

    const handleClick = () => {
        setVisible( prev => !prev )
    }

    return (
        <BottomPanelBox>
            <CorrectAnswer data={ example.answer.data } visible={visible}/>
            { solutionButtonVisible && 
                <SolutionButton example={example} />
            }
            { access === "ADMIN" ?
                <EssenceEditingLink essence="example" id={example.id} /> :
                example.answer.missed && answerButtonVisible &&
                    <AnswerVisibleButton answerVisible={visible} onClick={handleClick} />
            }
        </BottomPanelBox>
    )
}