export interface Permission {
    roleId: number
    // roleName: string
    // description: string
    roleClaims: RoleClaim[]
}

export interface RoleClaim {
    id: number
    roleId: number
    type: string
    value: string
    description: string
    group: string
    selected: boolean
}
