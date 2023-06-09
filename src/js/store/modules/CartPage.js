const state = {
    count: 0,
    products: {}
}

const getters = {

}

const mutations = {
    SET_COUNT: (state, count) => {
        state.count = count
    },

    SET_PRODUCTS: (state, products) => {
        state.products = products
    },
}

const actions = {
    init({commit}) {
        let cart = JSON.parse(localStorage.getItem('cart'))

        if (!cart) {
            cart = {
                count: 0
            }
        }

        const {count, ...products} = cart

        commit('SET_COUNT', count)
        commit('SET_PRODUCTS', products)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}