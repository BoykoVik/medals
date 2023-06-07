import md5 from 'md5/md5'

const state = {
    count: 0,
    hash: null
}

const getters = {
    count: state => {
        return state.count
    },

    hash: state => {
        return state.hash
    }
}

const mutations = {
    SET_COUNT: (state, value) => {
        state.count = value
    },

    UPDATE_HASH: (state, cart) => {
        state.hash = md5(JSON.stringify(cart))
    }
}

const actions = {
    pushProduct({ commit }, productId) {
        let cart = localStorage.getItem('cart')

        if (!cart) {
            cart = JSON.stringify({
                count: 0
            })
        }

        cart = JSON.parse(cart)

        if (!cart.hasOwnProperty(productId)) {
            cart[productId] = 0
        }

        cart[productId]++
        cart.count++

        localStorage.setItem('cart', JSON.stringify(cart))

        commit('SET_COUNT', cart.count)
        commit('UPDATE_HASH', cart)
    },

    initCart({ commit }) {
        let cart = localStorage.getItem('cart')

        if (!cart) {
            cart = JSON.stringify({
                count: 0
            })
            localStorage.setItem('cart', cart)
        }

        cart = JSON.parse(cart)

        commit('SET_COUNT', cart.count)
        commit('UPDATE_HASH', cart)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
