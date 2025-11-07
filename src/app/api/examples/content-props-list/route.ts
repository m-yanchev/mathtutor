import { NextRequest } from "next/server";
import User from "@/essences/user/User";
import DataSource from "@/essences/example/DataSource";

export async function PUT( request: NextRequest ) {

   const { contentPropsList } = await request.json()

    if (!(await User.checkAdminAccess())) {
        return Response.json({error: "User don't have access"}, {status: 403})
    }

    DataSource.updateContentPropsList( contentPropsList )

    return new Response( null, { status: 200 } )
}