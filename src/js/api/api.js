import axios from "axios";

let baseUrl = ''
if (process.env.NODE_ENV) {
    baseUrl = 'http://medals.localhost'
}

const API_PARAMETERS = baseUrl + '/api/parameters'
const API_PRODUCT = baseUrl + '/api/product/'
const API_CART_ITEMS = baseUrl + '/api/cart/items'

export default {
    fetchingParameter(parameterType) {
        return axios.get(API_PARAMETERS, {
            params: {
                parameterType: parameterType
            }
        })
    },

    fetchingProduct(id) {
        return axios.get(API_PRODUCT + id)
    },

    fetchingCartItems(data) {
        return axios.get(API_CART_ITEMS, {
            params: {
                data
            }
        })
    }
}
