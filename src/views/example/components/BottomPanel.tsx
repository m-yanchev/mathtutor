"use client"

import { useState } from "react"
import AnswerVisibleButton from "@/views/answer/ui/VisibleButton"
import CorrectAnswer from "@/views/answer/components/Correct"
import EssenceEditingLink from "@/views/common/components/EssenceEditingLink"
import { UserRole } from "@/essences/user/interfaces"
import Example from "@/essences/example/Example"
import type { ExampleData } from "@/essences/example/interfaces"
import BottomPanelBox from "../ui/ExampleBottomPanelBox"
import SolutionButton from "./SolutionButton"

type Props = Readonly<{
    data: ExampleData
    isSolutionDisplay: boolean
    access?: UserRole
}>

export default function BottomPanel( props: Props ) {
    
    const { isSolutionDisplay, access = "GUEST", data } = props
    const example = Example.create(data)
    const answerButtonVisible = !isSolutionDisplay
    const solutionButtonVisible = example.isSolution && !isSolutionDisplay

    const [ answerVisible, setAnswerVisible ] = useState<boolean>( access === "ADMIN" || !answerButtonVisible)

    const handleClick = () => {
        setAnswerVisible( prev => !prev )
    }

    return (
        <BottomPanelBox>
            <CorrectAnswer data={ example.answer.data } visible={answerVisible}/>
            { solutionButtonVisible && 
                <SolutionButton href={example.href} />
            }
            { access === "ADMIN" ?
                <EssenceEditingLink essence="example" id={example.id} /> :
                !example.answer.missed && answerButtonVisible &&
                    <AnswerVisibleButton answerVisible={answerVisible} onClick={handleClick} />
            }
        </BottomPanelBox>
    )
}