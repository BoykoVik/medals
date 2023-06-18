const state = {
    product: null,
    parametersData: null,
    steps: 0,
}

const getters = {

}

const mutations = {
    SET_PRODUCT: (state, product) => {
        state.product = product
    },

    DESTROY_PARAMETERS: (state) => {
        state.parametersData = null
    },

    /**
     * @param state
     * @param payload
     * @param payload.parameter
     * @param payload.value
     */
    SET_PARAMETER: (state, payload) => {
        if (state.parametersData === null) {
            state.parametersData = {}
        }

        state.parametersData[payload.parameter] = payload.value
    },

    UPDATE_STEPS: state => {
        state.steps++
    },

    SET_STEPS: (state, steps) => {
        state.steps = steps
    },
}

const actions = {
    /**
     * При открытии детальной страницы с товаром или при открытии модалки выбора параметров товара вызывается этот метод
     *
     * @param commit
     * @param dispatch
     * @param payload
     * @param payload.product
     */
    initProduct({ commit, dispatch }, payload) {
        commit('SET_PRODUCT', payload.product)
        commit('DESTROY_PARAMETERS')

        payload.product.parameters.map(parameter => {
            dispatch('setParameter', {
                parameter: parameter,
                value: undefined
            })
        })
    },

    resetParameters({ commit }) {
        for (let parameter of state.product.parameters) {
            commit('SET_PARAMETER', {
                parameter: parameter,
                value: undefined
            })
        }

        commit('UPDATE_STEPS')
    },

    /**
     * @param commit
     * @param payload
     * @param payload.parameter
     * @param payload.value
     */
    setParameter({ commit }, payload) {
        commit('SET_PARAMETER', payload)
        commit('UPDATE_STEPS')
    },

    validate({ state }) {
        return new Promise(function(resolve, reject) {
            if (state.parametersData === null) {
                resolve()
            }

            for (let parameter of state.product.parameters) {
                if (state.parametersData[parameter] === undefined) {
                    reject()
                }
            }

            resolve()
        });
    },

    destroy({ commit, dispatch }) {
        commit('SET_PRODUCT', null)
        commit('SET_STEPS', 0)
        commit('DESTROY_PARAMETERS', 0)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
