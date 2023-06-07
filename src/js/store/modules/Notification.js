const time = 2000;

const state = {
    message: null,
    isShow: false
}

const getters = {
    isShow: state => {
        return state.isShow
    },

    message: state => {
        return state.message
    }
}

const mutations = {
    SET_FREE: state => {
        state.isShow = false
    },

    SET_BUSY: state => {
        state.isShow = true
    },

    SET_MESSAGE: (state, message) => {
        state.message = message
    }
}

const actions = {
    pushNotification: ({ commit}, message) => {
        if (state.status !== true) {
            commit('SET_BUSY')
            commit('SET_MESSAGE', message)

            setTimeout(function() {
                commit('SET_FREE')
                commit('SET_MESSAGE', null)
            }, time)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
