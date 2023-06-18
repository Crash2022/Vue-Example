<template>
    <navbar/>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/shared/ui/CustomUI/NavBar.vue';

export default {
    components: {
        Navbar
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    overflow-x: hidden;
}
</style>