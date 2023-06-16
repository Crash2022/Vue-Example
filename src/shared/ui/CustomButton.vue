<template>
    <button class="custom_btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
};
</script>

<style scoped>
.custom_btn {
    background-color: green;
    color: white;
    /*padding: 10px;*/
    border: none;
    cursor: pointer;
    height: 38px;
    min-width: 100px;
    font-size: 20px;

    /*background-color: red;*/
    /*color: white;*/
    /*padding: 10px;*/
    /*border: none;*/
    /*cursor: pointer;*/
}
</style>