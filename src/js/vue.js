import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import store from "./store";

import {makeServer} from "./server";

import Catalog from "./components/catalog/Catalog.vue"
import Cart from "./components/cart/Cart.vue";
import Notification from "./components/notification/Notification.vue";
import Product from "./components/catalog/Product.vue";
import CartPage from "./components/cart/CartPage.vue";

Vue.component('catalog', Catalog)
Vue.component('cart', Cart)
Vue.component('notification', Notification)
Vue.component('product', Product)
Vue.component('cart-page', CartPage)

Vue.use(Vuex)

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

const app = new Vue({
    el: '#app',
    store: store
})