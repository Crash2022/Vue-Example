<template>
    <div class="modal_window" v-if="show" @click="closeModal">
        <div @click.stop class="modal_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/shared/mixins/toggleMixin';

export default {
    name: 'custom-modal',
    mixins: [toggleMixin]
    // изначально вместо миксина
    // props: {
    //     show: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    // methods: {
    //     closeModal() {
    //         this.$emit('update:show', false)
    //     }
    // }
}
</script>

<style scoped>
.modal_window {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
}

.modal_content {
    margin: auto;
    padding: 20px;
    background-color: white;
    min-width: 300px;
    min-height: 200px;
    /*border: 1px solid gray;*/
    box-shadow: 1px 2px 10px black;
}
</style>