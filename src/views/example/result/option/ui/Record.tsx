"use client";

import { OPTION_CHARS } from "../constants";
import type { OptionType } from "../Interfaces";

type Props = Readonly<{
    map: OptionType[];
    onClick?: ( input: number ) => void
}>;

export default function Record( { map, onClick }: Props ) {

    const buttonColorClassNameMap: Record<OptionType, string> = {
        "correct": "bg-success text-gray-light",
        "mistake": "bg-mistake text-gray-light",
        "none": "bg-gray-light text-body-dark"
    };

    const buttonModeClassName = onClick ? "cursor-pointer" : "";
    const buttonColorClassNameList = map.map( ( type ) => {
        return buttonColorClassNameMap[type];
    });

    return (
        <div className={`flex gap-[16px] font-light text-[16px] leading-[16px]`}>
            { OPTION_CHARS.split("").map( ( letter, index ) => {
                return (
                    <button 
                        key={index} 
                        type="button"
                        className={`${buttonModeClassName} ${buttonColorClassNameList[index]} flex rounded-[1000px] border-[1px] p-[12px] border-stroke`}
                        onClick={ () => onClick && onClick( index ) } >
                        <span className={`flex justify-center items-baseline size-[16px]`} >
                            {letter}
                        </span>
                    </button>
                )
            } ) }
        </div>
    )
}