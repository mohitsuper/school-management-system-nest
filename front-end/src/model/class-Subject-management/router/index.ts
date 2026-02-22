import { adminHashKey } from "../../../commen/adminHashKey";
import ClassSubjectManagementIndex from "../view/ClassSubjectManagementIndex.vue";

export const ClassSubjectManagementRouter = [
    {
        path:`/${adminHashKey}/class-subject-management`,
        name:'class-subject-management',
        component:ClassSubjectManagementIndex,
        meta:{
            layout:true
        }
    }
]