import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import Cart from "./modules/Cart"
import Notification from "./modules/Notification"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Cart,
        Notification
    }
})