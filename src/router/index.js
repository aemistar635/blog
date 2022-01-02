import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AuthRequired from "../services/AuthRequired";
import AlreadyLoggedIn from "../services/AlreadyLoggedIn";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import('../views/Authenticated/index.vue'),
        beforeEnter: AuthRequired,
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/Authenticated/dashboard/dashboard.vue')
            },
            {
                path: 'create-blog',
                component: () => import('../views/Authenticated/blog_create/CreateBlog.vue')
            },
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                component: () => import('../views/404.vue')
            }
        ]
    },
    {
        path: '/user',
        redirect: '/user/login',
        component: () => import('../views/Auth/index.vue'),
        beforeEnter: AlreadyLoggedIn,
        children: [
            {
                path: 'login',
                component: () => import('../views/Auth/login/login.vue')
            },
            {
                path: 'register',
                component: () => import('../views/Auth/signup/register.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                component:()=> import('../views/404.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
