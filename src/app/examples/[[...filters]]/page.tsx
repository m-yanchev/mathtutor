import { getTagIdListByString } from "@/views/tag/helpers";
import ExamplesPage from "@/views/example/components/ExamplesPage";

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
