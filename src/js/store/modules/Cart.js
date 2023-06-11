import md5 from 'md5/md5'

const state = {
    count: 0,
    hash: null,
    products: {},
    ids: []
}

function getActualCart() {
    let cart = localStorage.getItem('cart')

    if (!cart) {
        cart = JSON.stringify({
            count: 0,
            products: {}
        })
        localStorage.setItem('cart', cart)
    }

    return JSON.parse(cart)
}

const getters = {

}

const mutations = {
    SET_COUNT: (state, value) => {
        state.count = value
    },

    UPDATE_HASH: (state, cart) => {
        state.hash = md5(JSON.stringify(cart))
    },

    SET_PRODUCTS: (state, products) => {
        state.products = products
    },

    SET_IDS: (state, ids) => {
        state.ids = ids
    }
}

const actions = {
    // инициализация корзины в панеле навигации при загрузке страницы
    initCart({ commit }) {
        const cart = getActualCart();

        commit('SET_COUNT', cart.count)
        commit('SET_PRODUCTS', cart.products)
        commit('SET_IDS', _.keys(cart.products))
        commit('UPDATE_HASH', cart)
    },

    // действие при нажатии на карточке товара или при детальном просмотре
    pushProduct({ commit }, id) {
        const cart = getActualCart();

        if (!cart.products.hasOwnProperty(id)) {
            cart.products[id] = 0
        }

        cart.products[id]++
        cart.count++

        commit('SET_COUNT', cart.count)
        commit('SET_PRODUCTS', cart.products)
        commit('SET_IDS', _.keys(cart.products))
        commit('UPDATE_HASH', cart)

        localStorage.setItem('cart', JSON.stringify(cart))
    },

    // удаление товара из корзины
    deleteProduct({ commit }, id) {
        const cart = getActualCart();

        if (!cart.products.hasOwnProperty(id)) {
            return
        }

        cart.count -= cart.products[id]
        delete cart.products[id]

        commit('SET_COUNT', cart.count)
        commit('SET_PRODUCTS', cart.products)
        commit('SET_IDS', _.keys(cart.products))
        commit('UPDATE_HASH', cart)

        localStorage.setItem('cart', JSON.stringify(cart))
    },

    // изменение количества товара в корзине
    changeCount({ commit }, payload) {
        const cart = getActualCart();

        if (!cart.products.hasOwnProperty(payload.id)) {
            return
        }

        cart.count -= cart.products[payload.id]
        cart.products[payload.id] = payload.count
        cart.count += cart.products[payload.id]

        commit('SET_COUNT', cart.count)
        commit('SET_PRODUCTS', cart.products)
        commit('UPDATE_HASH', cart)

        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
