<template>
    <div class="posts_page">
<!--        пример получения данных из одного общего стора-->
        <div class="login_button">
            <custom-button @click="store.commit('login')">
                Залогиниться
            </custom-button>
        </div>

        <div v-if="store.state.isAuth">
            <div>Likes: {{ store.state.likes }}</div>
            <div>DoubleLikes: {{ store.getters.doubleLikes }}</div>
            <div>
                <custom-button @click="store.commit('incrementLikes')">
                    Увеличить лайки
                </custom-button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    // аналог useEffect
    mounted() {

    },
    // следит за изменениями, мутирует исходный массив
    watch: {
        // code here
    },
    // в отличие от methods, не делает лишние перерисовки соседних элементов
    // (аналог useCallback)
    computed: {
        // вариант с импортом стора
        store() {
            return store
        }

        // вариант без импорта стора
        // store() {
        //     return this.$store.state
        // }
    },
};
</script>

<style>
.posts_page {
    padding: 20px;
    overflow-x: hidden;
}
</style>