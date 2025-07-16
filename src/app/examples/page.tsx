import MainBox from "@/app/_components/MainBox";
import { getExamples } from "@/app/_lib/actions";
import Example from "@/app/examples/_components/Example";
import { getUserRole } from "@/app/_lib/dal";

export default async function Page() {

  const exampleListPromise = getExamples()
  const userRolePromise = getUserRole()
  const [examples, userRole] = await Promise.all([exampleListPromise, userRolePromise]);

  return (
    <MainBox model="example" access={userRole}>
        {examples.map(example => 
          <Example key={example.id} content={example} access={userRole}/>
        )}
    </MainBox>
  )
}
