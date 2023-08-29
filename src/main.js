import { createApp } from 'vue';
import './assets/css/main.css';
import App from './pages/App.vue';
import VueMask from 'v-mask';

const app = createApp(App).mount('#app');

app.use(VueMask, {});
