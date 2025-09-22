"use client";

import Record from "@/views/answer/option/ui/Record";
import Missed from "../ui/Missed";
import type { ResultOptionMap } from "@/essences/answer/interfaces";

type Props = Readonly<{
    map: ResultOptionMap
    missed: boolean
}>;

export default function OptionResult( { map, missed }: Props ) {

    return (<>
        <Record map={map} />
        <Missed hidden={ !missed } />
    </>)
}