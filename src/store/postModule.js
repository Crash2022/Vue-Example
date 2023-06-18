import axios from 'axios';

export const postModule = {
    state: () => ({
        // isModalOpen: false,
        isPostsLoading: false,
        posts: [
            // {id: 1, title: 'Javascript', body: 'Описание 1'},
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
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => a[state.selectedSort] < b[state.selectedSort] ? -1 : 1)
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    mutations: {
        setPostsIsLoading(state, isPostsLoading) {
            state.isPostsLoading = isPostsLoading
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
    },
    actions: {
        // постраничный вывод постов
        async getPosts({state, commit}) {
            try {
                commit('setPostsIsLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.page
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
                commit('setPostsIsLoading', false)
            } catch(error) {
                console.log(error)
            } finally {
                commit('setPostsIsLoading', false)
            }
        },
        // бесконечный скроллинг
        async getMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.page
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch(error) {
                console.log(error)
            }
        },
    }
}