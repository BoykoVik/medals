import {createServer, Model, faker} from "miragejs";
import fakeProducts from '../fake/products'

export function makeServer({ environment = "development"} = {}) {
    return createServer({
        environment,

        models: {
            product: Model
        },

        seeds(server) {
            fakeProducts.forEach(product => {
                server.create('product', product)
            })

        },

        routes() {
            this.namespace = 'api'

            this.get('/products', (schema) => {
                return schema.products.all()
            })

            this.get('/products-new', (schema) => {
                return schema.products.where(product => product.id <= 5)
            })

            this.get('/products-hit', (schema) => {
                return schema.products.where(product => product.id > 100)
            })

            this.get('/products-sale', (schema) => {
                return schema.products.where(product => product.id > 12)
            })

            this.post('/cart-positions', (schema, request) => {
                const data = JSON.parse(request.requestBody).data

                return schema.products.where(product => {
                    return data.includes(product.id)
                })
            })
        }
    })
}