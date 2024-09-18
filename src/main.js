import {createApp} from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from './pages/login/LoginComponent.vue'
import HomeComponent from './pages/dash/Home/HomeComponent.vue'
import ProductsComponent from './pages/dash/Products/ProductsComponent.vue';
import EditComponent from './pages/dash/Products/EditComponent.vue';
import MainComponent from './pages/dash/profile/MainComponent.vue';
import ListComponents from './pages/dash/Cards/ListComponents.vue';
import CKEDITOR from 'ckeditor4';
import './css/index.css'


const app = createApp(App)


const routes = [
   
    {path: '/', name: 'login', component: LoginComponent},
    {path: '/home',name: 'home', component: HomeComponent},
    {path: '/product', name: 'products', component: ProductsComponent},
    {path: '/main', name: 'main', component: MainComponent},
    {path: '/list', name: 'list',component: ListComponents},
    {path: '/createtest/:id/edit', name: 'editproducts', component: EditComponent}
]


const router = new createRouter({
    history: createWebHistory(),
    routes
})

app.use(CKEDITOR);
app.use(router); 

app.mount('#app'); 



/*Vue.config.productionTip = false
Vue.use(VueRouter)*/

