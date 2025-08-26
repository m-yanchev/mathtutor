import ExampleDescBox from "@/essences/example/description/descParser/ui/ExampleDescBox"
import { ParserComponentProps } from "@/essences/example/description/interfaces"

type Props = Readonly<{
    LeftBox: ( props: ParserComponentProps ) => React.ReactNode
    ImageComponent?: ( props: ParserComponentProps ) => React.ReactNode
}>

export default function Description({ LeftBox, ImageComponent }: Props) {
    return (
        <ExampleDescBox>
            <LeftBox />
            { ImageComponent && 
            <ImageComponent /> }
        </ExampleDescBox>
    )
}