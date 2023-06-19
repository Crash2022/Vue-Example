<template>
    <form @submit.prevent="onSubmit" class="form_wrapper">
        <h3 class="addPost_title">Создать пост</h3>
        <div class="add_form">
            <div class="form_input">
                <custom-input v-model="title.value"
                              :ref="title.ref"
                              type="text"
                              placeholder="Название"
                              v-focus
                              name="title"
                />
                <!--<p v-if="title.error">{{ title.error.message }}</p>-->
                <p v-if="title.error"
                   class="input_error"
                >
                    {{ 'Поле обязательно для заполнения' }}
                </p>
            </div>
            <div class="form_input">
                <custom-input v-model="body.value"
                              :ref="body.ref"
                              type="text"
                              placeholder="Описание"
                              name="body"
                />
                <!--<p v-if="body.error">{{ body.error.message }}</p>-->
                <p v-if="body.error"
                   class="input_error"
                >
                    {{ 'Поле обязательно для заполнения' }}
                </p>
            </div>

            <custom-button class="add_button"
                           type="submit"
            >
                Создать
            </custom-button>
        </div>
    </form>
</template>

<script>
import {useForm} from 'vue-hooks-form';

export default {
    data() {
        return {

        }
    },
    methods: {

    },

    setup(props, {emit}) {
        const {useField, handleSubmit} = useForm({
            defaultValues: {
                title: '',
                body: ''
            },
        })

        const id = Date.now()
        const title = useField('title', {
            rule: {
                required: true,
                // min: 6,
                // max: 30,
            },
        })
        const body = useField('body', {
            rule: {
                required: true,
            },
        })

        const onSubmit = (submitData) => {
            const post = {
                id,
                title: submitData.title,
                body: submitData.body,
            }
            emit('create', post)
        }

        return {
            title, body,
            onSubmit: handleSubmit(onSubmit),
        }
    },
}
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
.form_input {
    width: 100%;
    height: 64px;
}
.input_error {
    color: red;
    text-align: center;
    margin-top: 4px;
}
.add_button {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
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