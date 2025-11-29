import type { RelationAnswer, ResultOptionMap } from "@/essences/answer/interfaces";
import Box from "../relation/ui/Box";
import OptionResult from "./OptionResult";

type Props = Readonly<{
    maps: ResultOptionMap[];
    result: RelationAnswer
}>;

export default function RelationResult( { maps, result }: Props ) {

    return (
        <Box>
            { maps.map( ( map, index ) => (
                <OptionResult key={index} index={index} map={map} missed={ result.value[index].missed } />
            ) )}
        </Box>
    )
}
