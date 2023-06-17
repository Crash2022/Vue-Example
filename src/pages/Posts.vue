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

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            isModalOpen: false,
            isPostsLoading: false,
            posts: [
                // {id: 1, title: 'Javascript', body: 'Описание 1'},
                // {id: 2, title: 'React', body: 'Описание 2'},
                // {id: 3, title: 'Angular', body: 'Описание 3'}
            ],
            sortOptions: [
                {value: 'id', name: 'По порядку'},
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
            selectedSort: '', // название метода (для watch одинаковое)
            searchQuery: '',
            page: 1, // текущая страница
            // limit: 5, // лимит постов на странице
            limit: 7,
            totalPages: 0 // всего страниц
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.isModalOpen = false
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        openModal() {
            this.isModalOpen = true
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        //     // this.getPosts() // перенесли в watch page() (как иной вариант)
        // },

        // постраничный вывод постов
        async getPosts() {
            try {
                this.isPostsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.limit,
                        _page: this.page
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data
                this.isPostsLoading = false
            } catch(error) {
                console.log(error)
            } finally {
                this.isPostsLoading = false
            }
        },
        // бесконечный скроллинг
        async getMorePosts() {
            try {
                this.page += 1
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.limit,
                        _page: this.page
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
            } catch(error) {
                console.log(error)
            }
        },

        // // createPost(e) {
        // createPost() {
        //     // e.preventDefault() // можно написать здесь действие на сабмит
        //     const newPost = {
        //         id: Date.now(),
        //         title: this.title,
        //         body: this.body
        //     }
        //     this.posts.push(newPost)
        // },

        // @input="inputTitle" // вариант для инпута
        // inputTitle(e) {
        //     this.title = e.target.value
        // },
        // @input="inputBody" // вариант для инпута
        // inputBody(e) {
        //     this.body = e.target.value
        // }
    },
    // аналог useEffect
    mounted() {
        this.getPosts()

        this.getMorePosts()

        // observer без кастомной директивы
        // const myObserver = this.$refs.observer
        // const options = {
        //     rootMargin: '0px',
        //     threshold: 1.0
        // }
        // const callback = (entries, observer) => {
        //     if (entries[0].isIntersecting && this.page < this.totalPages) {
        //         this.getMorePosts()
        //     }
        // }
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe(myObserver)
    },
    // следит за изменениями, мутирует исходный массив
    watch: {
        // // название такое же, как и у переменной для значения
        // selectedSort(newValue) {
        //     // console.log(newValue)
        //     this.posts.sort((post1, post2) => {
        //         // можно записать newValue
        //         return post1[newValue].localeCompare(post2[newValue])
        //         // return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        //     })
        // },
        // // ещё один пример
        // // isModalOpen(value) {
        // //     console.log(value)
        // // }

        // можно здесь получать посты при изменении страницы
        // page() {
        //     this.getPosts()
        // }
    },
    computed: {
        // название любое, возвращает новый массив
        // без сортировки по айди
        // sortedPosts() {
        //   return [...this.posts].sort((post1, post2) => {
        //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
        // },

        // с сортировкой по айди
        sortedPosts() {
            return [...this.posts].sort((a, b) => a[this.selectedSort] < b[this.selectedSort] ? -1 : 1)
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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

.observer {
    /*height: 30px;*/
    /*background-color: yellow;*/
}

/*.pagination_wrapper {*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    gap: 10px;*/
/*    flex-wrap: wrap;*/
/*}*/
/*.page_item {*/
/*    border: 1px solid green;*/
/*    font-size: 20px;*/
/*    padding: 5px;*/
/*}*/
/*.page_item:hover {*/
/*    color: white;*/
/*    background-color: green;*/
/*    cursor: pointer;*/
/*}*/
/*.current_page {*/
/*    color: white;*/
/*    background-color: green;*/
/*}*/
</style>