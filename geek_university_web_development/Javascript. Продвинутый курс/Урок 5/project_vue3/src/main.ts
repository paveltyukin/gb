import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store';

const app = createApp(App);
// pass the injection key
app.use(store)
app.mount('#app')
