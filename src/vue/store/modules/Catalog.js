const state = {
    products: [],
    isCatalogExpand: true,
    limit: null,
    showActions: true,
    searchQuery: '',
}

const getters = {
    getProduct: state => id => {
        return state.products.filter(product => product.id === id)[0]
    }
}

const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products
    },

    SET_IS_CATALOG_EXPAND: (state, flag) => {
        state.isCatalogExpand = flag
    },

    SET_LIMIT: (state, limit) => {
        state.limit = limit
    },

    SET_SHOW_ACTIONS: (state, showActions) => {
        state.showActions = showActions
    },

    SET_SEARCH_QUERY: (state, searchQuery) => {
        state.searchQuery = searchQuery
    },
}

const actions = {
    /**
     * @param commit
     * @param payload
     * @param payload.products
     * @param payload.limit
     * @param payload.showActions
     */
    initCatalog({ commit }, payload) {
        commit('SET_PRODUCTS', payload.products)
        commit('SET_LIMIT', payload.limit > 0 ? payload.limit : null)
        commit('SET_SHOW_ACTIONS', payload.showActions)
    },

    /**
     * @param commit
     * @param payload
     * @param payload.flag
     */
    setIsCatalogExpand({ commit }, payload) {
        commit('SET_IS_CATALOG_EXPAND', payload.flag)
    },

    /**
     * @param commit
     * @param payload
     * @param payload.searchQuery
     */
    setSearchQuery({ commit }, payload) {
        commit('SET_SEARCH_QUERY', payload.searchQuery)
    },

    disableLimit({ commit }) {
        commit('SET_LIMIT', null)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
