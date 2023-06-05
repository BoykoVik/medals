import Vue from 'vue/dist/vue.js'

import Catalog from "./components/catalog/Catalog.vue"

Vue.component('catalog', Catalog)

const app = new Vue({
    el: '#app'
})