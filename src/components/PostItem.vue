<template>
    <div class="post">
        <div class="post_content">
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post_delete">
            <custom-button @click="$emit('delete', post)">
                Удалить
            </custom-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.post {
    border: 2px solid green;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post_content {

}
.post_delete button {
    background-color: transparent;
    color: black;
    border: 1px solid green;
    font-size: 16px;
}
.post_delete button:hover {
    background-color: red;
    color: white;
    /*border: 1px solid green;*/
}
</style>