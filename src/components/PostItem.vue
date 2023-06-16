<template>
    <div class="post">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div><strong>Описание:</strong> {{ post.body }}</div>
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
}
</style>