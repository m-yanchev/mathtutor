import { ExampleNumbersState } from "../interfaces";

type Props = Readonly<{
    states: ExampleNumbersState[]
}>;

export default function ExampleNumbers( { states }: Props ) {

    const colorMap = ( new Map< ExampleNumbersState, string >() )
        .set( ExampleNumbersState.CompletelyWrong, "bg-[#d7423a33] text-violet" )
        .set( ExampleNumbersState.PartiallyCorrect, "bg-[#f6c31933] text-violet" )
        .set( ExampleNumbersState.CompletelyCorrect, "bg-[#6c9e8133] text-violet" )
        .set( ExampleNumbersState.Missed, "bg-stroke text-violet" )
        .set( ExampleNumbersState.Completed, "bg-#356CE51A text-blue-dark border-blue-dark border-[1px]" )

    return (
        <div className="flex flex-wrap items-center gap-[8px] w-full">
            { states.map( ( state, i ) => {
                return (
                <div key={i} className={`${colorMap.get(state)} flex rounded-[8px] py-[4px] px-[10px]`} >
                    <span className="font-normal text-[16px] leading-[20px] text-violet" >{ i + 1 }</span>
                </div>
            ) } ) }
        </div>
    )
}