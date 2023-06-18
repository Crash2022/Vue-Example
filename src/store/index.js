import {createStore} from 'vuex';
import {postsModule} from '@/store/postsModule';

export default createStore({
    // state: {
    //     likes: 5,
    //     isAuth: false
    // },
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2
    //     }
    // },
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes +=1
    //     },
    //     login(state) {
    //         state.isAuth = !state.isAuth
    //     }
    // },
    // actions: {
    //
    // },
    modules: {
        posts: postsModule
    }
})