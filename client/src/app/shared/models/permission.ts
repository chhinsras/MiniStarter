export interface Permission {
    roleId: number
    name?: string
    description?: string
    isDefault?: boolean
    permissions: string[]
}
