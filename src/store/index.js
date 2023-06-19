import {createStore} from 'vuex';
import {postsModule} from '@/store/postsModule';

export default createStore({
    // один общий стейт
    state: {
        likes: 5,
        isAuth: false
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes +=1
        },
        login(state) {
            state.isAuth = !state.isAuth
        }
    },
    actions: {

    },

    // разделение на модули (аналог редльюсера)
    modules: {
        posts: postsModule
    }
})