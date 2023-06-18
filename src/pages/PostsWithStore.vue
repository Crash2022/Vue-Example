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

<!--        <div class="login_button">-->
<!--            <custom-button @click="store.commit('login')">-->
<!--                Залогиниться-->
<!--            </custom-button>-->
<!--        </div>-->

<!--        <div v-if="store.state.isAuth">-->
<!--            <div>Likes: {{ store.state.likes }}</div>-->
<!--            <div>DoubleLikes: {{ store.getters.doubleLikes }}</div>-->
<!--            <div>-->
<!--                <custom-button @click="store.commit('incrementLikes')">-->
<!--                    Увеличить лайки-->
<!--                </custom-button>-->
<!--            </div>-->
<!--        </div>-->


        <!--        обычный метод-->
        <!--        v-bind:posts="posts"-->

        <!--        с использованием computed-->
        <post-list v-bind:posts="sortedAndSearchedPosts"
                   @delete="deletePost"
                   v-if="!isPostsLoading"
        />
        <h3 v-else class="loading_posts">Загрузка постов...</h3>

        <!--        вариант observer без директивы-->
        <!--        <div class="observer" ref="observer"></div>-->
        <div class="observer" v-intersection="getMorePosts"></div>

        <!--        <custom-pagination v-model:page="page"-->
        <!--                           v-model:totalPages="totalPages"-->
        <!--                           @changePage="changePage"-->
        <!--        />-->

        <!--        <div class="pagination_wrapper">-->
        <!--            <div class="page_item"-->
        <!--                 :class="{-->
        <!--                     'current_page': pageNumber === this.page-->
        <!--                 }"-->
        <!--                 :key="pageNumber"-->
        <!--                 v-for="pageNumber in totalPages"-->
        <!--                 @click="changePage(pageNumber)"-->
        <!--            >-->
        <!--                {{pageNumber}}-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from "axios";
// import store from '../store';

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {

        };
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

        // // постраничный вывод постов
        // async getPosts() {
        // },
        // // бесконечный скроллинг
        // async getMorePosts() {
        // },
    },
    // аналог useEffect
    mounted() {
        this.getPosts()
        this.getMorePosts()
    },
    // следит за изменениями, мутирует исходный массив
    watch: {

    },
    computed: {
        // название любое, возвращает новый массив
        // без сортировки по айди
        // sortedPosts() {
        //   return [...this.posts].sort((post1, post2) => {
        //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
        // },

        // с сортировкой по айди
        // sortedPosts() {
        //     return [...this.posts].sort((a, b) => a[this.selectedSort] < b[this.selectedSort] ? -1 : 1)
        // },
        // sortedAndSearchedPosts() {
        //     return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // },
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

/*.login_button {*/
/*    margin-bottom: 10px;*/
/*}*/

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

.observer {
    /*height: 30px;*/
    /*background-color: yellow;*/
}
</style>