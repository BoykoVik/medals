const state = {
    product: {},
    parameters: [],
    parametersData: {},
}

const getters = {}

const mutations = {
    SET_PRODUCT: (state, product) => {
        state.product = product
    },

    PUSH_PARAMETER: (state, parameter) => {
        state.parameters.push(parameter)
    },

    INIT_PARAMETER_DATA: (state, { type }) => {
        state.parametersData[type] = null
    },

    SET_PARAMETER_DATA: (state, {type, value}) => {
        state.parametersData[type] = value
    },

}

const actions = {
    initProduct({commit}, payload) {
        commit('SET_PRODUCT', payload.product)
    },

    pushParameter({commit}, payload) {
        commit('PUSH_PARAMETER', payload)
        commit('INIT_PARAMETER_DATA', payload)
    },

    setParameter({commit}, payload) {
        console.log(payload)
        commit('SET_PARAMETER_DATA', {
            type: payload.type,
            value: payload.value
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}