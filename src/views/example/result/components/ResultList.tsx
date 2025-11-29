"use client";

import { useState } from "react";
import Content from "@/editor/components/Content";
import Example from "@/essences/example/Example";
import Answer from "@/essences/answer/Answer";
import type { ExampleResult } from "@/views/example/result/interfaces";
import { ListBox, ListItemBox } from "@/views/example/ui/ListBox";
import SmallButton from "@/views/common/buttons/SmallButton";
import Solution from "@/views/example/components/Solution";
import Number from "@/views/example/number/ui/Number";
import ExamplePoints from "../ui/ExamplePoints";
import Result from "./Result";

type Props = Readonly<{
    results: ExampleResult[]
}>;

export default function ResultList( {results}: Props ) {

    const [ solutionVisible, setSolutionVisible]  = useState<Boolean>(false);

    const solutionButtonTitle = solutionVisible ? "Приховати рішення" : "Показати рішення";

    const handleClick = () => {
        setSolutionVisible(!solutionVisible);
    }

    return (
        <ListBox>
            { results.map( ( exResult, index ) => {
                const example = Example.create(exResult.example);
                const result = Answer.createByData(exResult.result);
                return (
                    <ListItemBox key={ example.id } >
                        <ExamplePoints number={ exResult.resultPoints } type={ exResult.resultType } />
                        <Number value={ index + 1 } />
                        <Content id={ example.id } content={ example.description } type="condition" />
                        <div className="flex justify-between items-end w-full" >
                            <Result value={result} correct={ example.answer } />
                            { example.isSolution &&
                                <SmallButton onClick={handleClick} >
                                    {solutionButtonTitle}
                                </SmallButton> 
                            }
                        </div>
                        { solutionVisible && example.isSolution &&
                            <Solution example={example} />
                        }
                    </ListItemBox>
                )
            } ) }
        </ListBox>
    )
}