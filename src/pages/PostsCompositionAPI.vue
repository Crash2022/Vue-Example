<template>
    <div class="posts_page">
        <custom-modal v-model:show="isModalOpen">
            <post-form @create="createPost"/>
        </custom-modal>

        <div class="addPost">
            <div class="search_input">
                <custom-input placeholder="Поиск поста по названию..."
                              v-model="searchQuery"
                />
            </div>
            <div class="sort_select">
                <custom-select v-model="selectedSort"
                               :options="sortOptions"
                />
            </div>
            <custom-button @click="openModal">
                Добавить пост
            </custom-button>
        </div>

        <post-list :posts="sortedAndSearchedPosts"
                   @delete="deletePost"
                   v-if="!isPostsLoading"
        />
        <h3 v-else class="loading_posts">Загрузка постов...</h3>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import {usePosts} from '@/shared/hooks/usePosts';
import {useSortedPosts} from '@/shared/hooks/useSortedPosts';
import {useSortedAndSearchedPosts} from '@/shared/hooks/useSortedAndSearchedPosts';

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            isModalOpen: false,
            sortOptions: [
                {value: 'id', name: 'По порядку'},
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
        }
    },
    setup(props) {
        const { posts, totalPages, isPostsLoading } = usePosts(7)
        const { selectedSort, sortedPosts } = useSortedPosts(posts)
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts, totalPages, isPostsLoading,
            selectedSort, sortedPosts,
            searchQuery, sortedAndSearchedPosts
        }
    },
    methods: {
        createPost(post) {
            this.posts.unshift(post)
            this.isModalOpen = false
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        openModal() {
            this.isModalOpen = true
        },
    },
};
</script>

<style>
.posts_page {
    padding: 20px;
    overflow-x: hidden;
}
.loading_posts {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 30px;
}

.addPost {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 10px;
    width: 100%;
}
.search_input {
    width: 100%;
}
.search_input input {
    width: 100%;
}
.sort_select {
    display: flex;
}
</style>