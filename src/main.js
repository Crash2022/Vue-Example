import { createApp } from 'vue'
import App from '@/App.vue';
import components from '@/shared/ui'

const app = createApp(App)

// глобальный импорт компонент
components.forEach(comp => {
    app.component(comp.name, comp)
})

app.mount('#app')
