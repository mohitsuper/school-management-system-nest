import { adminHashKey } from "../../../commen/adminHashKey";
import CreateTeacher from "../components/CreateTeacher.vue";
import UpdateTeacher from "../components/UpdateTeacher.vue";
import TeachersIndex from "../view/TeachersIndex.vue";

export const teachersRoute = [
    {
        path:`/${adminHashKey}/teachers`,
        name:'teachers.index',
        component:TeachersIndex,
        meta:{
            layout:true
        }
    },
    {
        path:`/${adminHashKey}/create/teacher`,
        name:'create.teacher',
        component:CreateTeacher,
        meta:{
            layout:true
        }
    },
    {
        path:`/${adminHashKey}/update/teacher/:id`,
        name:'update.teacher',
        component:UpdateTeacher,
        meta:{
            layout:true
        }
    }
    
]