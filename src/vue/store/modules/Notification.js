const time = 2000;

const TYPE_ENUM = {
    DEFAULT: 'default',
    LIGHT: 'light',
}

const state = {
    message: null,
    isShow: false,
    type: TYPE_ENUM.DEFAULT
}

const getters = {
    isShow: state => {
        return state.isShow
    },

    message: state => {
        return state.message
    },

    type: state => {
        return state.type
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
    },

    SET_TYPE: (state, type) => {
        state.type = type
    },
}

const actions = {
    pushNotification: ({commit}, message) => {
        if (state.status !== true) {
            commit('SET_BUSY')
            commit('SET_MESSAGE', message)

            setTimeout(function() {
                commit('SET_FREE')
                commit('SET_MESSAGE', null)
                commit('SET_MESSAGE', TYPE_ENUM.DEFAULT)
            }, time)
        }
    },

    pushNotificationLight: ({commit}, message) => {
        if (state.status !== true) {
            commit('SET_BUSY')
            commit('SET_MESSAGE', message)
            commit('SET_TYPE', TYPE_ENUM.LIGHT)

            setTimeout(function() {
                commit('SET_FREE')
                commit('SET_MESSAGE', null)
                commit('SET_MESSAGE', TYPE_ENUM.DEFAULT)
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
