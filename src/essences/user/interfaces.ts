export interface UserData {
    role?: UserRoleData
}

export type UserRoleData = "USER" | "ADMIN"

export interface UserInput {
    role: UserRoleInput
}

export type UserRoleInput = "USER" | "ADMIN"

export type UserRole = "GUEST" | "USER" | "ADMIN";