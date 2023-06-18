import axios from 'axios';
import {ref, onMounted} from 'vue';

export function usePosts(limit) {

    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)

    const fetchingData = async () => {
        try {
            // isPostsLoading.value = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: 1 // this.page
                }
            })
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data
            isPostsLoading.value = false
        } catch(error) {
            console.log(error)
        } finally {
            isPostsLoading.value = false
        }
    }

    onMounted(fetchingData)

    return { posts, totalPages, isPostsLoading }
}