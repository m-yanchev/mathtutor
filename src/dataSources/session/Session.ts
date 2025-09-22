import "server-only"

import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

type SessionPayload = {
    userId: number
    expiresAt: Date
}

export default class Session {

    private static secretKey = process.env.SESSION_SECRET
    private static encodedKey = new TextEncoder().encode( Session.secretKey )

    private static async decrypt(session: string | undefined = '') {
        try {
            const { payload } = await jwtVerify(session, Session.encodedKey, {
                algorithms: ['HS256'],
            })
            return payload as SessionPayload
        } catch (error) {
            console.log('Failed to verify session', error)
        }
    }

    private static async encrypt(payload: SessionPayload) {
        return new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('365d')
            .sign(Session.encodedKey)
    }

    public static getUserId = async () : Promise<number> => {
        const cookie = (await cookies()).get('session')?.value
        if ( !cookie ) return 0
        const session = await Session.decrypt(cookie)
        return session?.userId ?? 0
    }

    public static async create(userId: number) {
        const expiresAt = new Date( Date.now() + 5 * 365 * 24 * 60 * 60 * 1000 )
        const session = await Session.encrypt({ userId, expiresAt })
        const cookieStore = await cookies()
        
        cookieStore.set('session', session, {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
            sameSite: 'strict',
            path: '/',
        })
    }

    public static async delete() {
        const cookieStore = await cookies()
        cookieStore.delete('session')
    }    
}
