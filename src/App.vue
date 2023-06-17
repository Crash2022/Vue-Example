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
        <div class="sort_select">
            <custom-select v-model="selectedSort"
                           :options="sortOptions"
            />
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
            isModalOpen: false,
            isPostsLoading: false,
            posts: [
                // {id: 1, title: 'Javascript', body: 'Описание 1'},
                // {id: 2, title: 'React', body: 'Описание 2'},
                // {id: 3, title: 'Angular', body: 'Описание 3'}
            ],
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
            selectedSort: '', // название метода для watch одинаковое
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
    },
    // следить за изменениями
    watch: {
        // название такое же, как и у переменной для значения
        selectedSort(newValue) {
            console.log(newValue)
        },
        // ещё один пример
        // isModalOpen(value) {
        //     console.log(value)
        // }
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
    /*gap: 10px;*/
    margin-bottom: 10px;
}

.sort_select {
    display: flex;
    justify-content: flex-end;
}

.loading_posts {
    text-align: center;
    margin-top: 50px;
    font-size: 30px;
}

</style>