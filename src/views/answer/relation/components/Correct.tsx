import type { RelationValue } from "@/essences/answer/interfaces";
import OptionCorrect from "@/views/answer/option/components/Correct";
import Box from "../ui/Box";
import OptionBox from "../ui/OptionBox";

export default function Correct( { value }: { value: RelationValue } ) {
    return (
        <Box>
            { value.map( ( option, index ) => (
            <OptionBox key={index} index={index}>
                <OptionCorrect value={option.value} />
            </OptionBox>
            ) ) }
        </Box>
    )
}