<template>
    <div class="navbar_wrapper">
        <div @click="$router.push('/')" class="main_link">
            Vue 3
        </div>
        <nav class="navbar_links">
            <div class="post_button">
                <custom-button @click="$router.push('/posts-store')">Посты VueX</custom-button>
            </div>
            <div class="post_button">
                <custom-button @click="$router.push('/posts-composition')">Посты CompAPI</custom-button>
            </div>
            <div>
                <router-link to="/posts">Посты</router-link>
            </div>
            <div>
                <router-link to="/about">Обо мне</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import CustomButton from '@/shared/ui/CustomButton.vue';

export default {
    name: 'navbar',
    components: {CustomButton}
};
</script>

<style scoped>
.navbar_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: orange;
    box-shadow: 2px 2px 4px gray;
    padding: 0 20px;
}
.main_link:hover {
    cursor: pointer;
    color: white;
}
.navbar_links {
    display: flex;
    align-items: center;
    gap: 20px;
}
.post_button button {
    background-color: aliceblue;
    color: black;
}
.post_button button:hover {
    background-color: cornflowerblue;
    color: white;
}
</style>