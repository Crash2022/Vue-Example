<template>
    <div class="app">
        <custom-modal v-model:show="isModalOpen">
            <post-form @create="createPost"/>
        </custom-modal>

        <div class="addPost">
<!--            <custom-button @click="getPosts">-->
<!--                Получить посты-->
<!--            </custom-button>-->
            <custom-button @click="openModal">
                Добавить пост
            </custom-button>
        </div>

        <post-list v-bind:posts="posts"
                   @delete="deletePost"
                   v-if="!isPostsLoading"
        />
        <h3 v-else class="loading_posts">Загрузка постов...</h3>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CustomButton from "@/shared/ui/CustomButton.vue";
import axios from "axios";

export default {
    components: {
        CustomButton,
        PostList, PostForm
    },
    data() {
        return {
            posts: [
                // {id: 1, title: 'Javascript', body: 'Описание 1'},
                // {id: 2, title: 'React', body: 'Описание 2'},
                // {id: 3, title: 'Angular', body: 'Описание 3'}
            ],
            isModalOpen: false,
            isPostsLoading: false,
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.isModalOpen = false
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        openModal() {
            this.isModalOpen = true
        },
        async getPosts() {
            try {
                this.isPostsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
                this.posts = response.data
                this.isPostsLoading = false
            } catch(error) {
                console.log(error)
            } finally {
                this.isPostsLoading = false
            }
        }

        // // createPost(e) {
        // createPost() {
        //     // e.preventDefault() // можно написать здесь действие на сабмит
        //     const newPost = {
        //         id: Date.now(),
        //         title: this.title,
        //         body: this.body
        //     }
        //     this.posts.push(newPost)
        // },

        // @input="inputTitle" // вариант для инпута
        // inputTitle(e) {
        //     this.title = e.target.value
        // },
        // @input="inputBody" // вариант для инпута
        // inputBody(e) {
        //     this.body = e.target.value
        // }
    },
    mounted() {
        this.getPosts()
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

.addPost {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.loading_posts {
    text-align: center;
    margin-top: 50px;
    font-size: 30px;
}

</style>