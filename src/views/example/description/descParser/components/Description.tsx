import ExampleDescBox from "@/views/example/description/descParser/ui/ExampleDescBox"
import { ParserComponentProps } from "@/views/example/description/interfaces"

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