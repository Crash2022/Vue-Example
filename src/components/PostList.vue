<template>
    <div class="post" v-for="post of posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
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