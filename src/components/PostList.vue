<template>
    <div v-if="posts.length > 0">
        <h3 class="post_title">Список постов</h3>
        <post-item v-for="post in posts"
                   :post="post"
                   :key="post.id"
                   @delete="$emit('delete', post)"
        />
    </div>
    <h3 v-else class="no_posts">Постов нет!</h3>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.post_title {
    text-align: center;
    margin-top: 20px;
}
.no_posts {
    color: red;
    text-align: center;
    margin-top: 20px;
}
</style>