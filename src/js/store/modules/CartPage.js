const state = {
    count: 0,
    productCounts: {},
    productIds: []
}

const getters = {

}

const mutations = {
    SET_COUNT: (state, count) => {
        state.count = count
    },

    SET_PRODUCT_COUNTS: (state, productCounts) => {
        state.productCounts = productCounts
    },

    SET_PRODUCT_IDS: (state, productIds) => {
        state.productIds = productIds
    }
}

const actions = {
    init({commit}) {
        let cart = JSON.parse(localStorage.getItem('cart'))

        if (!cart) {
            cart = {
                count: 0
            }
        }

        const {count, ...productCounts} = cart

        commit('SET_COUNT', count)
        commit('SET_PRODUCT_COUNTS', productCounts)
        commit('SET_PRODUCT_IDS', Object.keys(productCounts))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}