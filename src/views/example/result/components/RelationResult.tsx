import type { RelationAnswer, ResultOptionMap } from "@/essences/answer/interfaces";
import OptionAnswer from "../../../answer/option/ui/Record";
import Missed from "../ui/Missed";
import Box from "@/views/answer/relation/ui/Box";
import OptionBox from "@/views/answer/relation/ui/OptionBox";

type Props = Readonly<{
    maps: ResultOptionMap[];
    result: RelationAnswer
}>;

export default function RelationResult( { maps, result }: Props ) {

    return (
        <Box>
            { maps.map( ( map, index ) => (
                <OptionBox key={index} index={index}>
                    <OptionAnswer map={map} />
                    <Missed hidden={ !result.value[index].missed } />
                </OptionBox>
            ) )}
        </Box>
    )
}
