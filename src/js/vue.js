import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import store from "./store";

import Catalog from "./components/catalog/Catalog.vue"
import Cart from "./components/catalog/Cart.vue";
import Notification from "./components/catalog/Notification.vue";

Vue.component('catalog', Catalog)
Vue.component('cart', Cart)
Vue.component('notification', Notification)

Vue.use(Vuex)

const app = new Vue({
    el: '#app',
    store: store
})