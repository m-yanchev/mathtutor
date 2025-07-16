import Link from "next/link";
import MainBox from "@/app/_components/MainBox";
import { getTests } from "@/app/_lib/actions";
import { TestUpdatingBar } from "@/app/_components/UpdatingBar";
import { getUserRole } from "@/app/_lib/dal";

export default async function Page() {

    const testListPromise = getTests();
    const userRolePromise = getUserRole;
    const [tests, userRole] = await Promise.all([testListPromise, userRolePromise()]);

    return (
        <MainBox model="test" access={userRole}>
            <ul className="list-none p-0 m-0">
                {tests.map(({id, name}) =>                
                    <li key={id} className="p-2 border-b border-gray-200 hover:bg-gray-50">
                        {userRole === "ADMIN" && 
                        <TestUpdatingBar id={id} />}
                        <Link className="" href={`/test/${id}`}>{name}</Link>
                    </li>         
                )}
            </ul>
        </MainBox>
    )
}