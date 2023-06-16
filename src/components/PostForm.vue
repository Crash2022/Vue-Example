<template>
    <form @submit.prevent class="form_wrapper">
        <h3 class="addPost_title">Создать пост</h3>
        <div class="add_form">
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
            <custom-button class="add_button"
                           @click="createPost"
            >
                Создать
            </custom-button>
        </div>
    </form>
</template>

<script>
import CustomButton from '@/shared/ui/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
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
    margin-bottom: 10px;
}
.add_form {
    display: flex;
    align-items: center;
    gap: 5px;
}
.addPost_title {
    margin-bottom: 5px;
}

.input {
    padding: 10px;
    margin-right: 5px;
}

.add_button {
    padding: 5px;
    cursor: pointer;
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