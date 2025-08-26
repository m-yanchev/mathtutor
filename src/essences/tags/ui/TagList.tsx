import { Tag } from "@prisma/client"

type Props = Readonly<{
    tagList: Tag[]
    onSelect: ( tag: Tag ) => void
}>

export default function TagList( { tagList, onSelect }: Props ) {

    const handleSelect = ( tag: Tag ) => {
        onSelect(tag)
    }

    return (
        <div className="flex w-[682px] mt-[1px] rounded-[4px] border-[1px] pt-[4px] pr-[8px] bg-gray-light border-stroke shadow-drop">
            <ul className="w-full h-[160px] overflow-auto" >
                {tagList?.map((tag) => (
                    <li 
                        key={tag.id} 
                        className="flex justify-start items-center w-full h-[40px] cursor-pointer pl-[16px] border-b-[1px] border-stroke" 
                        onClick={() => handleSelect(tag)}>
                        <span className="font-normal text-[18px] leading-[24px] text-body-dark">
                            {tag.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
