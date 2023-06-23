<template>
    <div v-if="!isLoading">
        <div v-if="!isError">
            <div class="product">
                <div class="product-title">{{ product.name }}</div>

                <product-parameters :parameterNames="product.parameters"
                ></product-parameters>

                <div class="product-cart">
                    <base-button @click="pushToCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Добавить в корзину
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
import {mapActions, mapGetters, mapState} from "vuex"

import ProductParameters from "./ProductParameters.vue";
import BaseButton from "../ui/BaseButton.vue"

import api from "../../api/api"
import error from "../../mixins/error";

export default {
    name: 'Product',
    components: {ProductParameters, BaseButton},
    mixins: [error],
    data() {
        return {
            isLoading: false,
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),
        ...mapActions('Product', ['initProduct', 'resetParameters', 'validate']),

        init() {
            this.isLoading = true

            api.fetchingProduct(this.id).then(response => {
                this.isError = false
                this.isLoading = false

                this.initProduct({
                    product: response.data
                })
            }).catch(error => {
                this.isError = true
                this.isLoading = false

                if (error?.response?.message) {
                    this.errorMessage = error.response.data.message
                } else {
                    this.errorMessage = this.errorDefaultMessage
                }
            })
        },

        pushToCart() {
            this.validate()
                .then(
                    () => {
                        this.pushProduct({
                            id: this.id,
                            parametersData: this.parametersData
                        })
                        this.pushNotification('Товар добавлен в корзину')
                        this.resetParameters()
                    },
                    () => {
                        this.pushNotification('Укажите все параметры товара')
                    }
                )
        }
    },
    computed: {
        ...mapState('Product', ['product', 'parametersData']),
    },
    created() {
        this.init()
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