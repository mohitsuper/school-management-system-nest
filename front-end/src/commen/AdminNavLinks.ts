import { adminHashKey } from "./adminHashKey";

export const AdminNavLinks = [
    {
        path:`/${adminHashKey}/dashboard`,
        icon:'pi pi-home',
        name:'Dashboard'
    },
    {
        path:`/${adminHashKey}/teachers`,
        icon:'pi pi-id-card',
        name:'Teachers'
    },
    {
        path:`/${adminHashKey}/class-subject-management`,
        icon:'pi pi-id-card',
        name:'Class & Subject Management'
    }
]