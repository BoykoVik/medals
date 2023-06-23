import axios from "axios";

let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://medals.localhost'
}

const API_PARAMETERS = BASE_URL + '/api/parameters'
const API_PARAMETERS_LABEL = BASE_URL + '/api/parameters/label'
const API_PRODUCT = BASE_URL + '/api/product/'
const API_CART_ITEMS = BASE_URL + '/api/cart/items'
const API_CART_DO_ORDER = BASE_URL + '/api/cart/do-order'

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
