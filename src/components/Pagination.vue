<template>
    <div class="pagination_wrapper">
        <div class="page_item">1</div>
        <div class="page_item">2</div>
        <div class="page_item">3</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pagination_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.page_item {
    border: 1px solid green;
    font-size: 20px;
    padding: 5px;
}
</style>