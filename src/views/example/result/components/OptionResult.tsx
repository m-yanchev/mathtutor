"use client";

import type { ResultOptionMap } from "@/essences/answer/interfaces";
import Record from "../option/ui/Record";
import Box from "../option/ui/Box";
import Missed from "../ui/Missed";

type Props = Readonly<{
    map: ResultOptionMap
    missed: boolean
    index?: number
}>;

export default function OptionResult( { map, missed, index }: Props ) {

    return (
        <Box index={index}>
            <Record map={map} />
            <Missed hidden={ !missed } />
        </Box>
    )
}