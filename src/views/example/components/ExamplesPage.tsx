import { Fragment } from "react/jsx-runtime";
import { findTagsInStorageById } from "@/views/tag/actions";
import TopPageHeaderBlock from "@/views/common/components/TopPageHeaderBlock";
import TopPageNavigator from "@/views/common/components/TopPageNavigator";
import Example from "@/dataSources/example/Example";
import User from "@/essences/user/User";
import ExampleListBox from "../ui/ExampleListBox";
import ExampleView from "./Example";
import PageControlPanel from "./PageControlPanel";

type Props = Readonly<{
    tagIdList: number[]
}>

export default async function ExamplesPage( {tagIdList}: Props ) {

  const tagSetPromise = findTagsInStorageById(tagIdList)
  const exampleListPromise = Example.getList({tagIdList: tagIdList})
  const userRolePromise = User.getUserRole()
  const [tagSetResult, examples, userRole] = await Promise.all([tagSetPromise, exampleListPromise, userRolePromise]);

  return (
    <Fragment>
      <TopPageHeaderBlock>
        <TopPageNavigator pageName="examples" />
      </TopPageHeaderBlock>
      <PageControlPanel tags={tagSetResult.tags} userRole={userRole} />
      <ExampleListBox>
        { examples.map( example => 
        <ExampleView key={example.id} content={example} access={userRole} /> ) }
      </ExampleListBox>
    </Fragment>
  )
}
