<template>


    <div v-if="!isLoading">
        <div v-if="!isError">
            <div class="product">
                <div class="product-title">{{ this.product.name }}</div>
                <div class="product-cart">
                    <button :data-id="this.product.id"
                            @click.prevent="pushToCart"
                            class="card-cart">
                        <i :data-id="this.product.id" class="fa-solid fa-cart-shopping"></i>
                        В корзину
                    </button>
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
import { mapActions } from "vuex";
import axios from "axios";

export default {
    name: 'Product',
    data() {
        return {
            product: {},
            isError: false,
            errorMessage: '',
            errorDefaultMessage: 'Ошибка загрузки',
            isLoading: false
        }
    },
    props: {
        productApi: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),

        pushToCart(event) {
            const id = event.target.getAttribute('data-id')
            this.pushProduct(id)
            this.pushNotification('Товар добавлен в корзину')
        }
    },
    created() {
        const fetching = async () => {
            return await axios.get(this.productApi);
        };

        fetching().then(response => {
            this.product = response.data
            this.isError = false
            this.isLoading = false
        }).catch(error => {
            this.isError = true
            this.products = {}
            this.isLoading = false

            if (error?.response?.message) {
                this.errorMessage = error.response.data.message
            }
            else {
                this.errorMessage = this.errorDefaultMessage
            }

        })
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

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product-title {
        color: $gray;
        font-size: 14px;
    }

    .product-cart {
        padding: 0.3rem 1rem;
        background-color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: $border-radius;
        color: $white;
        outline: none;

        @include transition;

        &:hover {
            background-color: darken($primary, 10%);
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