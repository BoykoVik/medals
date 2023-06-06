import Vue from 'vue/dist/vue.js'

import Catalog from "./components/catalog/Catalog.vue"
import Cart from "./components/catalog/Cart.vue";

Vue.component('catalog', Catalog)
Vue.component('cart', Cart)

const app = new Vue({
    el: '#app'
})