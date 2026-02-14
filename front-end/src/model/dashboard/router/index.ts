import { adminHashKey } from "../../../commen/adminHashKey";
import AdminDashboard from "../view/AdminDashboard.vue";

export const adminDashboardRouter = [
    {
        path: `/${adminHashKey}/dashboard`,
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: {            
            layout:true
        }
    }
]