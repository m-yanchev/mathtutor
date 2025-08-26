import { getTagIdListByString } from "@/essences/tags/tags";
import ExamplesPage from "@/essences/examplesPage/components/ExamplesPage";

type Props = Readonly<{
    params: Promise<{ filters: string[] | undefined}>
}>

export default async function Page({params}: Props) {

  const { filters } = await params
  const tagSetIdList = filters !== undefined ? getTagIdListByString( filters[0] ) : []

  return (
    <ExamplesPage tagIdList={tagSetIdList} />
  )
}
