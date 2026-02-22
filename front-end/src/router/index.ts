import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Error404 from "../view/Error404.vue";
import  { adminDashboardRouter } from "../model/dashboard/router";
import { authRouter } from "../model/auth/router";
import { teachersRoute } from "../model/teachers/router";
import { ClassSubjectManagementRouter } from "../model/class-Subject-management/router";

const globleRoutes = [
    {
        path:'/',
        name:'home',
        component:Home,
        meta: {            
            layout:false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Error404,
        meta: {            
            layout:false
        }
    },
]

const routes = [
    ...globleRoutes,
    ...adminDashboardRouter,
    ...authRouter,
    ...teachersRoute,
    ...ClassSubjectManagementRouter
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;