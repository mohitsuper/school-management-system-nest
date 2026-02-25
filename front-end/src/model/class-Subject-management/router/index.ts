import { adminHashKey } from "../../../commen/adminHashKey";
import CreateClass from "../components/CreateClass.vue";
import CreateSubject from "../components/CreateSubject.vue";
import UpdateClass from "../components/UpdateClass.vue";
import UpdateSubject from "../components/UpdateSubject.vue";
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
        path:`/${adminHashKey}/create-class`,
        name:'create.class',
        component:CreateClass,
        meta:{
            layout:true
        }
    },
    {
        path:`/${adminHashKey}/class-update/:id`,
        name:'update.class',
        component:UpdateClass,
        meta:{
            layout:true
        }
    },
    {
        path:`/${adminHashKey}/create/subjects`,
        name:'create.subject',
        component:CreateSubject,
        meta:{
            layout:true
        }
    },
     {
        path:`/${adminHashKey}/update/subjects/:id`,
        name:'update.subject',
        component:UpdateSubject,
        meta:{
            layout:true
        }
    },
]