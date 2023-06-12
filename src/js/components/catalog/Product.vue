<template>

    <div v-if="!isLoading">
        <div v-if="!isError">
            <div class="product">
                <div class="product-title">{{ this.product.name }}</div>

                <product-parameters
                ></product-parameters>

                <div class="product-cart">
                    <base-button @click="pushToCart">
                        <i class="fa-solid fa-cart-shopping"></i>Добавить в корзину
                    </base-button>
                </div>
            </div>
        </div>
        <div v-else class="product-error">
            <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
            {{ errorMessage }}
        </div>
    </div>
    <div v-else class="product-loader">
        <span class="loader"></span>
    </div>

</template>

<script>
import {mapActions, mapState} from "vuex"

import ProductParameters from "./ProductParameters.vue";
import BaseButton from "../ui/BaseButton.vue"

import api from "../../api/api"


export default {
    name: 'Product',
    components: {ProductParameters, BaseButton},
    data() {
        return {
            isLoading: false,
            isError: false,
            errorMessage: '',
            errorDefaultMessage: 'Ошибка загрузки',
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        params: {
            type: Array
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),
        ...mapActions('Product', ['initProduct']),

        pushToCart() {
            for (let prop in this.parametersData) {
                if (this.parametersData[prop] === null) {
                    this.pushNotification('Укажите все параметры товара')
                    return
                }
            }

            this.pushProduct(this.product.id)
            this.pushNotification('Товар добавлен в корзину')
            this.$emit('pushedToCart')
        },

        init() {
            this.isLoading = true

            api.fetchingProduct(this.id).then(response => {
                this.initProduct({
                    product: response.data
                })
                this.isError = false
                this.isLoading = false
            }).catch(error => {
                this.isError = true
                this.isLoading = false

                if (error?.response?.message) {
                    this.errorMessage = error.response.data.message
                }
                else {
                    this.errorMessage = this.errorDefaultMessage
                }
            })
        }
    },
    computed: {
        ...mapState('Product', ['product', 'parametersData'])
    },
    created() {
        if (this.id) {
            this.init()
        }
        else {
            // this.product = {
            //     id: this.id,
            //     name: this.name,
            //     parameters: this.params
            // }
        }
    },
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .product {
        padding: 1rem;
        border-radius: $border-radius;
        border: 1px solid #e7e7e7;
    }

    .product-title {
        color: $gray;
        font-size: 14px;
    }

    .product-cart {
        margin-top: 2rem;

        i {
            margin-right: 0.5rem;
        }
    }

    // заглушка при ошибке
    .product-error {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: #ffacac;
        font-size: 18px;
        margin-top: 2rem;
        gap: 1rem;

        @include select-off;
    }

    // заглушка прелоадер
    .product-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: $gray-dark;
        font-size: 18px;
        margin-top: 2rem;

        @include select-off;
        @include preloader($gray-dark, 48px);
    }
</style>