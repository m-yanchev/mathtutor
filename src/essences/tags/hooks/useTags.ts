import { useState } from "react";
import { Tag } from "../interfaces";
import { getTagIdListString } from "../tags";

export default function useTags(tags: Tag[] = []) {
    const [tagIdList, setTagIdList] = useState<number[]>( tags.map( ({id}) => id ) );

    const handleTagSetChange = (tagSetIdList: number[]) => {
        setTagIdList(tagSetIdList);
    };


    return { handleTagSetChange, tagIdListString: getTagIdListString(tagIdList) };
}