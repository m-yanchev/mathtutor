import { redirect } from "next/navigation";
import User from "@/essences/user/User";

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const searchParams = url.searchParams;
        const paramKey = searchParams.get('key');    
        await User.loginByKey( paramKey || '' );
    } catch (error) {
        console.error("Login error in route.ts:", error);
    } finally {
        redirect("/")
    }
}