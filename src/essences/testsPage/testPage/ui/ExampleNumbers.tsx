import { ResultType } from "../interfaces";

type Props = Readonly<{
    results?: ResultType[];
    count?: number
}>;

export default function ExampleNumbers( { results, count = 0 }: Props ) {

    const colors = []

    if (results) {
        const colorMap = ( new Map< ResultType, string >() )
            .set( "completelyWrong", "bg-[#d7423a33]")
            .set( "partiallyCorrect", "bg-[#f6c31933]" )
            .set( "completelyCorrect", "bg-[#6c9e8133]" )
        for ( const result of results ) {
            colors.push( colorMap.get(result) )
        }
    } else {
        for ( let i = 0; i < count; i++) {
            colors.push( "bg-stroke")
        }
    }

    return (
        <div className="flex flex-wrap items-center gap-[8px] w-full">
            { colors.map( ( color, i ) => {
                return (
                <div key={i} className={`flex rounded-[8px] py-[4px] px-[10px] ${color}`} >
                    <span className="font-normal text-[16px] leading-[20px] text-violet" >{ i + 1 }</span>
                </div>
            ) } ) }
        </div>
    )
}