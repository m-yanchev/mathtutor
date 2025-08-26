import Example from "@/essences/example/components/Example";
import { getUserRole } from "@/app/_lib/dal";
import { findTagsInStorageById } from "@/essences/tags/actions";
import ViewAdjustments from "@/essences/examplesPage/components/ViewAdjustments";
import ExampleListBox from "@/essences/examplesPage/ui/ExampleListBox";
import { getExamples } from "../actions";
import { Fragment } from "react/jsx-runtime";
import TopPageHeaderBlock from "@/essences/topLevelLayout/components/TopPageHeaderBlock";
import TopPageNavigator from "@/essences/topLevelLayout/components/TopPageNavigator";
import EssenceAddingLink from "@/essences/topLevelLayout/components/EssenceAddingLink";

type Props = Readonly<{
    tagIdList: number[]
}>

export default async function ExamplesPage( {tagIdList}: Props ) {

  const tagSetPromise = findTagsInStorageById(tagIdList)
  const exampleListPromise = getExamples({tagIdList: tagIdList})
  const userRolePromise = getUserRole()
  const [tagSetResult, examples, userRole] = await Promise.all([tagSetPromise, exampleListPromise, userRolePromise]);

  return (
    <Fragment>
      <TopPageHeaderBlock>
        <TopPageNavigator pageName="examples" />
      </TopPageHeaderBlock>
      { userRole === "ADMIN" && 
      <EssenceAddingLink essence={"example"} /> }
      <ViewAdjustments tags={tagSetResult.tags} />
      <ExampleListBox>
        { examples.map( example => 
        <Example key={example.id} content={example} access={userRole} /> ) }
      </ExampleListBox>
    </Fragment>
  )
}
