import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main.vue';
import Posts from '@/pages/Posts.vue';
import About from '@/pages/About.vue';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router