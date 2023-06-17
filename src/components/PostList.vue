<template>
    <div v-if="posts.length > 0" class="postList_wrapper">
        <h3 class="post_title">Список постов</h3>
        <transition-group name="posts_list">
            <post-item v-for="post in posts"
                       :post="post"
                       :key="post.id"
                       @delete="$emit('delete', post)"
            />
        </transition-group>
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
.postList_wrapper {
    margin-bottom: 10px;
}
.post_title {
    text-align: center;
    margin-top: 20px;
}
.no_posts {
    color: red;
    text-align: center;
    margin: 20px 0;
}

/*стили для сортировки*/
.posts_list-move,
/*стили для удаления и добавления*/
.posts_list-enter-active,
.posts_list-leave-active {
    transition: all 0.4s ease;
}
.posts_list-enter-from,
.posts_list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
</style>