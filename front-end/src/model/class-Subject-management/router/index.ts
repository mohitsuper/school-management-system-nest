import { adminHashKey } from "../../../commen/adminHashKey";
import CreateClass from "../components/CreateClass.vue";
import ClassSubjectManagementIndex from "../view/ClassSubjectManagementIndex.vue";

export const ClassSubjectManagementRouter = [
    {
        path:`/${adminHashKey}/class-subject-management`,
        name:'class-subject-management',
        component:ClassSubjectManagementIndex,
        meta:{
            layout:true
        }
    },
    {
        path:`/${adminHashKey}/class-create`,
        name:'create.class',
        component:CreateClass,
        meta:{
            layout:true
        }
    }
]