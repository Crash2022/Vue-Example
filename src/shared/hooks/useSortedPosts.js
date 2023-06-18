import {computed, ref} from 'vue';

export function useSortedPosts(posts) {

    const selectedSort = ref('')

    const sortedPosts = computed(() => {
        return [...posts.value].sort((a, b) => a[selectedSort.value] < b[selectedSort.value] ? -1 : 1)
    })

    return { selectedSort, sortedPosts }
}