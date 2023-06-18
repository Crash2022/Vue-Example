import { createApp } from 'vue'
import App from '@/App.vue';
import store from '@/store';
import router from '@/router/router';
import components from '@/shared/ui'
import directives from '@/directives';

const app = createApp(App)

// глобальный импорт компонент
components.forEach(comp => {
    app.component(comp.name, comp)
})

directives.forEach(dir => {
    app.directive(dir.name, dir)
})
// app.directive('intersection', VIntersection)

app
    .use(store)
    .use(router)
    .mount('#app')
