import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main.vue';
import Posts from '@/pages/Posts.vue';
import Post from '@/pages/Post.vue';
import About from '@/pages/About.vue';
import Error404 from '@/pages/Error404.vue';


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
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error404
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router