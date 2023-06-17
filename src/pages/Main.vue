<template>
    <div class="main_page">
        <h1>
            Добро пожаловать!
        </h1>
        <div>
            <router-link to="/posts">Посты</router-link>
        </div>
        <div>
            <router-link to="/about">Обо мне</router-link>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.main_page {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 20px;
}
h1 {
    margin-bottom: 20px;
}
</style>