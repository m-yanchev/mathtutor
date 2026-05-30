import { Fragment } from "react/jsx-runtime";
import { findTagsInStorageById } from "@/views/tag/actions";
import TopPageHeaderBlock from "@/views/common/ui/HeaderBoxForPageNavigator";
import TopPageNavigator from "@/views/common/components/TopPageNavigator";
import ExampleDS from "@/dataSources/example/Example";
import User from "@/essences/user/User";
import { ListBox, ListItemBox } from "../ui/ListBoxes";
import Item from "./Item";
import PageControlPanel from "./PageControlPanel";

type Props = Readonly<{
    tagIdList: number[]
}>

export default async function ListPage( {tagIdList}: Props ) {

  const tagSetPromise = findTagsInStorageById(tagIdList)
  const exampleListPromise = ExampleDS.getList({tagIdList: tagIdList})
  const userRolePromise = User.getUserRole()
  const [tagSetResult, examples, userRole] = await Promise.all([tagSetPromise, exampleListPromise, userRolePromise]);

  return (
    <Fragment>
      <TopPageHeaderBlock>
        <TopPageNavigator pageName="examples" />
      </TopPageHeaderBlock>
      <PageControlPanel tags={tagSetResult.tags} userRole={userRole} />
      <ListBox>
        { examples.map( example => 
          <ListItemBox key={example.id}>
            <Item content={example} access={userRole} />
          </ListItemBox>
        ) }
      </ListBox>
    </Fragment>
  )
}
