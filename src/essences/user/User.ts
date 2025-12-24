import { cache } from 'react' 
import type { UserRole } from './interfaces'
import Session from '@/dataSources/session/Session'
import UserDS from '@/dataSources/user/User'

export default class User {

    public static verifySession = cache(async () : Promise<{userId: number}> => {
      const userId = await Session.getUserId()
      if (userId === 0) {
        const user = await UserDS.create()
        await Session.create(user.id)
        return { userId: user.id}
      }     
      return { userId }
    })
    
    public static checkAdminAccess = async () : Promise<boolean> => {
      const userId = await Session.getUserId()
      if (userId === 0) return false
      const user = await UserDS.getById(userId)
      if (!user) return false
      return user.role === 'ADMIN'
    }

    public static getUserRole = async () : Promise<UserRole> => {
      const userId = await Session.getUserId()
      if (userId === 0) return 'GUEST'
      const user = await UserDS.getById(userId)
      if (!user) return 'GUEST'
      return user.role
    }

    public static async getUserIdFromSession() : Promise<number> {
        return await Session.getUserId()
    }

    public static async loginByKey( key: string) {
        try {
            const corretAdminKey = process.env.ADMIN_KEY;
            const actualRole: UserRole = key === corretAdminKey ? "ADMIN" : "USER"
            const sessionUserId = await Session.getUserId()
            if ( sessionUserId === 0 ) {
                const user = await UserDS.create({ role: actualRole });
                await Session.create(user.id)
            } else {
                const sessionUser = await UserDS.getById(sessionUserId)
                if ( !sessionUser ) throw new Error("User row isn`t in database but this user is in session")
                if ( sessionUser.role !== actualRole ) {
                    await UserDS.updateById(sessionUserId, { role: actualRole })
                }
            }
        } catch (error) {
            console.error( `Error in User essence, been running function loginByKey( key: ${key} ):`, error );
            throw error
        }      
    }

    public static async throwIfNotAdmin() {
        if (!( await User.checkAdminAccess())) {
            throw new Error("User don't have access")
        }
    }

    public static async logout() {
        await Session.delete()
    }
}