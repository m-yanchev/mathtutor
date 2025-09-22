export function getTagIdListString( tagIdList: number[] ): string {
    return tagIdList.length > 0 ? `/${ tagIdList.join("-") }` : ""
}

export function getTagIdListByString( tagIdListString: string ): number[] {
    return tagIdListString.length > 0 ? tagIdListString.split("-").map(id => Number(id)) : []
}