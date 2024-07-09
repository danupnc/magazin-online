import{createRouter, createWebHistory} from 'vue-router'

import homeView from '../views/homeView.vue'
import productView from '../views/productView.vue'
// import aboutView from '@views/aboutView.vue'


const routes = [
    {
        path: '/home',
        component: homeView,
        name : 'Home'
    },
    
    //     path: '/about',
    //     component: aboutView,
    //     name : 'About'
    // },
    {
        path: '/product/:id',
        component: productView,
        name : 'Product'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  
});


export default router;

