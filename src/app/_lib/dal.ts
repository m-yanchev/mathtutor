import 'server-only'

import { cache } from 'react' 
import { createSession, getUserId } from '@/app/_lib/session'
import { prisma } from './prisma'
 
export const verifySession = cache(async () : Promise<{userId: number}> => {

  const userId = await getUserId()
 
  if (userId === 0) {
    const user = await prisma.user.create({})
    await createSession(user.id)
    return { userId: user.id}
  }
 
  return { userId }
})

export async function checkAdminAccess() : Promise<boolean> {
  const userId = await getUserId()
  if (userId === 0) return false
  const user = await prisma.user.findUnique({where: {id: userId}})
  if (!user) return false
  return user.role === 'ADMIN'
}

export async function getUserRole() : Promise<'ADMIN' | 'USER' | 'GUEST'> {
  const userId = await getUserId()
  if (userId === 0) return 'GUEST'
  const user = await prisma.user.findUnique({where: {id: userId}})
  if (!user) return 'GUEST'
  return user.role
}