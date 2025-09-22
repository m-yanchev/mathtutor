import { OptionValue } from "@/essences/answer/interfaces";
import Record from "../ui/Record";
import { OPTION_CHARS } from "../constants";
import type { OptionType } from "../Interfaces";

export default function Correct( { value }: { value: OptionValue } ) {

    const map = OPTION_CHARS.split("").map<OptionType>( ( _, index ) => {
        return value === index ? "correct" : "none";
    } )

    return (
        <Record map={map} />
    )
}