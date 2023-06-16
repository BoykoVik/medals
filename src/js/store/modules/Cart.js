import md5 from 'md5/md5'

const state = {
    count: 0,      // общее количество товаров, нужно для отображения на значке корзины
    products: {},  // вся информация о каждом заказе из корзины, нужна для отображения списка товаров и передачи на сервер
    ids: []        // id элементов корзины, нужны для загрузки с сервера информации о товарах
}

/**
 * Получение корзины из localStorage
 *
 * @returns {any}
 */
function getActualCart() {
    let cart = localStorage.getItem('cart')

    if (!cart) {
        cart = JSON.stringify({})
        localStorage.setItem('cart', cart)
    }

    return JSON.parse(cart)
}

/**
 * Ключ для заказа в корзине по id и параметрам заказа
 *
 * @param obj
 * @returns {*}
 */
function md5Key(obj) {
    return md5(JSON.stringify(obj))
}

const getters = {

}

const mutations = {
    SET_COUNT: (state, value) => {
        state.count = value
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

        let count = 0
        const ids = []
        const products = {}

        for (let key in cart) {
            const product = cart[key]

            count += product.count
            ids.push(product.id)
            products[key] = {
                id: product.id,
                count: product.count,
                parametersData: product.parametersData,
            }
        }

        commit('SET_COUNT', count)
        commit('SET_PRODUCTS', products)
        commit('SET_IDS', [...new Set(ids)])
    },

    // действие при нажатии добавить в корзину на карточке товара или при детальном просмотре
    pushProduct({ commit, dispatch }, payload) {
        const cart = getActualCart()
        const key = md5Key(payload)

        if (!cart[key]) {
            cart[key] = {
                count: 1,
                id: payload.id,
                parametersData: payload.parametersData
            }
        }
        else {
            cart[key].count++
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch('initCart')
    },

    // удаление товара из корзины
    deleteProduct({ commit, dispatch }, payload) {
        const cart = getActualCart();
        const key = payload

        if (!cart[key]) {
            return
        }

        delete cart[key]

        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch('initCart')
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
