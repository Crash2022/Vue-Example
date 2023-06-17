<template>
    <form @submit.prevent class="form_wrapper">
        <h3 class="addPost_title">Создать пост</h3>
        <div class="add_form">
            <custom-input v-model="post.title"
                          type="text"
                          placeholder="Название"
            />
            <custom-input v-model="post.body"
                          type="text"
                          placeholder="Описание"
            />
            <custom-button class="add_button"
                           @click="createPost"
            >
                Создать
            </custom-button>
        </div>
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
            this.post.id = Date.now()

            // подписка на событие (для передачи из дочерней в родительскую)
            // название 'create' используется в родительской компонентне (@create)
            // вторым параметром принимает post
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        },
    }
};
</script>

<style scoped>
.form_wrapper {

}
.addPost_title {
    text-align: center;
    margin-bottom: 20px;
}
.add_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}
.add_form input {
    width: 100%;
}
.add_button {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
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