<template>
    <div class="app">
        <form>
            <h3 class="addPost_title">Создать пост</h3>
            <input v-bind:value="title"
                   @input="inputTitle"
                   class="input"
                   type="text"
                   placeholder="Название"
            >
            <input v-bind:value="body"
                   @input="inputBody"
                   class="input"
                   type="text"
                   placeholder="Описание"
            >
            <button class="add_button" @click="createPost">
                Создать
            </button>
        </form>
        <div class="post" v-for="post of posts">
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание 1'},
                {id: 2, title: 'React', body: 'Описание 2'},
                {id: 3, title: 'Angular', body: 'Описание 3'},
            ],
            title: '',
            body: '',
        };
    },
    methods: {
        createPost() {

        },
        inputTitle(e) {
            this.title = e.target.value
        },
        inputBody(e) {
            this.body = e.target.value
        }
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

.addPost_title {
    margin-bottom: 5px;
}

.post {
    border: 2px solid green;
    padding: 10px;
    margin-top: 10px;
}

.input {
    padding: 5px;
    margin-right: 5px;
}

.add_button {
    padding: 5px;
}
</style>