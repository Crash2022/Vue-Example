<template>
    <div class="app">
        <post-form @create="createPost"
                   :title="title"
                   :body="body"
        />
        <post-list v-bind:posts="posts"/>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание 1'},
                {id: 2, title: 'React', body: 'Описание 2'},
                {id: 3, title: 'Angular', body: 'Описание 3'}
            ],
            title: '',
            body: '',
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
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

</style>