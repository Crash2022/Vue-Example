import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main.vue';
import Posts from '@/pages/Posts.vue';
import PostsWithStore from '@/pages/PostsWithStore.vue';
import PostsWithCommonStore from '@/pages/PostsWithCommonStore.vue';
import PostsCompositionAPI from '@/pages/PostsCompositionAPI.vue';
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
        path: '/posts-store',
        component: PostsWithStore
    },
    {
        path: '/store',
        component: PostsWithCommonStore
    },
    {
        path: '/posts-composition',
        component: PostsCompositionAPI
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