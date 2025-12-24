import type { UserData, UserInput } from "@/essences/user/interfaces";
import { prisma } from "../prisma";

export default class User {

    public static create( { role }: UserData = { role: "USER" } ) {
        try {
            return prisma.user.create({ data: { role } })
        } catch (error) {
            console.error( `Error in User data source, been running function create( { role: ${role} } ):`, error);
            throw error;
        }
    }

    public static getById( id: number ) {
        return prisma.user.findUnique({ where: { id } })
    }

    public static updateById( id: number, input: UserInput ) {
        return prisma.user.update({ where: { id }, data: input })
    }
}
