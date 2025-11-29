'use client'

import { useState } from "react";
import type { AnswerData } from "@/essences/answer/interfaces";
import InputInEditor from "../ui/InputInEditor";

export default function ExampleAnswerInput( props: { data: AnswerData } ) {

    const [ data, setValue ] = useState<AnswerData>( props.data );

    return (
        <InputInEditor onChange={setValue} value={data} />
    )
}