import axios from "axios";

let baseUrl = window.location.origin
if (process.env.NODE_ENV) {
    baseUrl = 'http://medals.localhost'
}

const API_PARAMETERS = baseUrl + '/api/parameters'
const API_PRODUCT = baseUrl + '/api/product/'

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
    }
}
