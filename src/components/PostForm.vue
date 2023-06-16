<template>
    <form @submit.prevent>
        <h3 class="addPost_title">Создать пост</h3>
        <input v-model="post.title"
               class="input"
               type="text"
               placeholder="Название"
        >
        <input v-model="post.body"
               class="input"
               type="text"
               placeholder="Описание"
        >
        <button class="add_button"
                @click="createPost"
        >
            Создать
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        };
    },
    // можно так передавать пропсы?
    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     body: {
    //         type: String,
    //         required: true
    //     }
    // }
    methods: {
        createPost() {
            this.post.id=Date.now()
            // this.posts.push(newPost)

            // подписка на событие (для передачи из дочерней в родительскую)
            // название 'create' используется в родительской компонентне
            // вторым параметром принимает post
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
            // this.title = ''
            // this.body = ''
        },
    }
};
</script>

<style scoped>
.addPost_title {
    margin-bottom: 5px;
}

.input {
    padding: 5px;
    margin-right: 5px;
}

.add_button {
    padding: 5px;
}
</style>

<!--вариант без директивы v-model-->
<!--<input-->
<!--    v-bind:value="post.title"-->
<!--    @input="post.title = $event.target.value"-->
<!--    class="input"-->
<!--    type="text"-->
<!--    placeholder="Название"-->
<!--&gt;-->
<!--<input v-bind:value="post.body"-->
<!--       @input="post.body = $event.target.value"-->
<!--       class="input"-->
<!--       type="text"-->
<!--       placeholder="Описание"-->
<!--&gt;-->