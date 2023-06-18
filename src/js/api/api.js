import axios from "axios";

let baseUrl = ''
if (process.env.NODE_ENV) {
    baseUrl = 'http://medals.localhost'
}

const API_PARAMETERS = baseUrl + '/api/parameters'
const API_PARAMETERS_LABEL = baseUrl + '/api/parameters/label'
const API_PRODUCT = baseUrl + '/api/product/'
const API_CART_ITEMS = baseUrl + '/api/cart/items'
const API_CART_DO_ORDER = baseUrl + '/api/cart/do-order'

export default {
    fetchingProducts(url) {
        return axios.get(url)
    },

    fetchingProduct(id) {
        return axios.get(API_PRODUCT + id)
    },

    fetchingParameter(parameterType) {
        return axios.get(API_PARAMETERS, {
            params: {
                parameterType
            }
        })
    },

    fetchingParameterLabel(parameterTuple) {
        return axios.get(API_PARAMETERS_LABEL, {
            params: {
                parameterTuple
            }
        })
    },

    fetchingCartItems(data) {
        return axios.get(API_CART_ITEMS, {
            params: {
                data
            }
        })
    },

    doOrder(data) {
        return axios.post(API_CART_DO_ORDER, {
            ...data
        })
    }
}
