import { adminHashKey } from "../../../commen/adminHashKey";
import AdminLogin from "../view/AdminLogin.vue";
import StudentLogin from "../view/StudentLogin.vue";

export const authRouter = [
    {
        path: `/${adminHashKey}/login`,
        name: 'Admin',
        component: AdminLogin,
        meta: {            
            layout:false
        }
    },
    {
        path: `/login`,
        name: 'Admin',
        component: StudentLogin,
        meta: {            
            layout:false
        }
    }
]