import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon } from "oh-vue-icons";
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(FloatingVue)
app.use(router);
app.mount('#app');
