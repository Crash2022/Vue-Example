<template>
    <div class="posts_page">
        <custom-modal v-model:show="isModalOpen">
            <post-form @create="createPost"/>
        </custom-modal>

        <div class="addPost">
            <div class="search_input">
                <custom-input placeholder="Поиск поста по названию..."
                              :model-value="searchQuery"
                              @update:model-value="setSearchQuery"
                />
            </div>
            <div class="sort_select">
                <custom-select :model-value="selectedSort"
                               @update:model-value="setSelectedSort"
                               :options="sortOptions"
                />
            </div>
            <custom-button @click="openModal">
                Добавить пост
            </custom-button>
        </div>

<!--        пример получения данных из одного общего стора-->
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

        <post-list v-bind:posts="sortedAndSearchedPosts"
                   @delete="deletePost"
                   v-if="!isPostsLoading"
        />
        <h3 v-else class="loading_posts">Загрузка постов...</h3>

        <div class="observer" v-intersection="getMorePosts"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            // весь стейт теперь находится в стор
            isModalOpen: false,
        };
    },
    methods: {
        ...mapMutations({
            setPage: 'posts/setPage',
            setSearchQuery: 'posts/setSearchQuery',
            setSelectedSort: 'posts/setSelectedSort',
        }),
        ...mapActions({
            getPosts: 'posts/getPosts',
            getMorePosts: 'posts/getMorePosts',
        }),

        openModal() {
            this.isModalOpen = true
        },
        createPost(post) {
            this.posts.unshift(post)
            this.isModalOpen = false
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },

        // функции запросов без стора создавались тут
        // // постраничный вывод постов
        // async getPosts() {
        // },
        // // бесконечный скроллинг
        // async getMorePosts() {
        // },
    },
    // аналог useEffect
    mounted() {
        // без стора запросы делались тут
        // почему если закомментировать, то всё равно работает?!
        this.getPosts()
        // this.getMorePosts()
    },
    // следит за изменениями, мутирует исходный массив
    watch: {
        // code here
    },
    computed: {
        ...mapState({
            isPostsLoading: state => state.isPostsLoading,
            posts: state => state.posts,
            sortOptions: state => state.sortOptions,
            selectedSort: state => state.selectedSort,
            searchQuery: state => state.searchQuery,
            page: state => state.page,
            limit: state => state.limit,
            totalPages: state => state.totalPages,
        }),
        ...mapGetters({
            sortedPosts: 'posts/sortedPosts',
            sortedAndSearchedPosts: 'posts/sortedAndSearchedPosts'
        })

        // без стора здесь были методы сортировки
        // с сортировкой по айди
        // sortedPosts() {
        // },
        // sortedAndSearchedPosts() {
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