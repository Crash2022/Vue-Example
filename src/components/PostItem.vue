<template>
    <div class="post">
        <div class="post_content">
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post_delete">
            <custom-button>Удалить</custom-button>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/shared/ui/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.post {
    border: 2px solid green;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post_content {

}
.post_delete button {
    background-color: red;
    color: white;
    font-size: 16px;
}
</style>