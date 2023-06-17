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
    padding: 10px;
    border: none;
    cursor: pointer;
    height: 38px;
    min-width: 200px;
    /*width: 100%;*/
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>