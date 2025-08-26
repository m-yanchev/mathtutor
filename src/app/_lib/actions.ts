'use server'

import { checkAdminAccess } from './dal';

export async function throwIfNotAdmin() {
    if (!( await checkAdminAccess())) {
        throw new Error("User don't have access")
    }
}