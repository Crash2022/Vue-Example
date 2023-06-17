<template>
    <div class="post_page">
        Это страница поста с ID = {{ $route.params.id }}
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.post_page {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
}
</style>