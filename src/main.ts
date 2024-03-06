import { createApp } from 'vue'
import router from './router/index';
import { createPinia } from 'pinia'
import vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import './assets/css/common/global.scss'
import NavBar from './components/NavBar.vue'


const pinia = createPinia()

createApp(App)
    .component('NavBar', NavBar) //添加全局组件NavBar
    .use(router)
    .use(vant)
    .use(pinia)
    .mount('#app')
