import { redirect } from "next/navigation";
import User from "@/essences/user/User";

export async function GET(request: Request) {

    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const paramKey = searchParams.get('key');
    
    await User.loginByKey( paramKey || '' );

    redirect("/")
}