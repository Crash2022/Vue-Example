<template>
    <div class="pagination_wrapper">
        <div class="page_item"
             :class="{
                     'current_page': pageNumber === page
                 }"
             :key="pageNumber"
             v-for="pageNumber in totalPages"
             @click="changePage(pageNumber)"
        >
            {{pageNumber}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'custom-pagination',
    props: {
        page: {
            type: Number
        },
        totalPages: {
            type: Number
        }
    },
    methods: {
        changePage(pageNumber) {
            this.page = pageNumber
            this.$emit('changePage', this.page, this.totalPages)
            // this.getPosts()
        },
    }
}
</script>

<style scoped>
.pagination_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}
.page_item {
    border: 1px solid green;
    font-size: 20px;
    padding: 5px;
}
.page_item:hover {
    color: white;
    background-color: green;
    cursor: pointer;
}
.current_page {
    color: white;
    background-color: green;
}
</style>