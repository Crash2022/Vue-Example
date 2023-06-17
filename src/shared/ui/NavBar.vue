<template>
    <div class="navbar_wrapper">
        <div>Vue 3</div>
        <nav class="navbar_links">
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
export default {
    name: 'navbar'
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
.navbar_links {
    display: flex;
    gap: 20px;
}
</style>