<template>
    <div v-if="items.length"
         class="cart-page">
        <h2 class="cart-page-label">Корзина</h2>

        <div class="cart-content">
            <div class="cart-list">
                <cart-item v-for="item of items"
                           :key="item.key"
                           :keyId="item.key"
                           :id="item.id"
                           :title="item.name"
                           :description="item.description"
                           :url="item.url"
                           :image="item.image"
                           :imageAlt="item.image_alt"
                           :price="item.price"
                           :sectionName="item.sectionName"
                           :parameterLabels="item.parameterLabels"
                           :count="item.count"
                           @deleteItem="deleteItem">
                </cart-item>
            </div>

            <div class="cart-result">
                <div class="cart-result-title">
                    Итого
                    <span>{{ resultPrice }} ₽</span>
                </div>
                <div class="cart-result-count">
                    Товары, {{ this.count }} шт.
                </div>
                <a class="cart-result-order">
                    <base-button @click="doOrder"
                                 :style="'primary'">
                        Заказать
                    </base-button>
                </a>
            </div>
        </div>
    </div>
    <div v-else class="cart-list-plug">
        В корзине пока пусто
    </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import {mapState} from "vuex";
import axios from "axios";
import BaseButton from "../ui/BaseButton.vue";
import api from "../../api/api";

export default {
    name: 'CartPage',
    components: {
        BaseButton,
        CartItem
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        fetchingPositions() {
            const products = []
            for (let key in this.products) {
                products.push({
                    id: this.products[key].id,
                    parametersData: this.products[key].parametersData,
                })
            }

            api.fetchingCartItems(products).then(response => {
                for (let key in this.products) {
                    const product = this.products[key]

                    this.items.push({
                        key,
                        count: product.count,
                        ...response.data.filter(i => i.id === product.id)[0]
                    })
                }
            }).catch(e => {
                this.items = []
                console.error(e)
            })
        },

        deleteItem(keyId) {
            this.items = this.items.filter(item => item.key !== keyId)
        },

        doOrder() {
            const fetching = async () => {
                return axios.post(this.cartOrderApi, {
                    data: this.products
                })
            }

            fetching().catch(error => {
                console.error('Ошибка при формировании заказа', error)
            })
        }
    },
    computed: {
        ...mapState('Cart', ['ids', 'count', 'products']),

        resultPrice() {
            return this.items.reduce((price, item) => {
                return price + item.price * item.count
            }, 0)
        }
    },
    beforeMount() {
        this.fetchingPositions()
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .cart-page-label {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .cart-content {
        margin-top: 1rem;

        & > * {
            border: 1px solid #e5e5e5;
            border-radius: $border-radius;
            padding: 1rem;
        }

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;

        @include media-breakpoint-up($lg) {
            grid-template-columns: 9fr 3fr;
        }
    }

    .cart-list-plug {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: $gray-dark;
        font-size: 18px;

        @include select-off;
    }

    .cart-result {
        align-self: start;

        &-title {
            font-weight: 500;
            font-size: 1.2rem;
            display: flex;
            justify-content: space-between;
        }
    }

    .cart-result-count {
        margin-top: 0.3rem;
        font-size: 0.8rem;
        color: #919191;
    }

    .cart-result-order {
        display: block;
        margin-top: 1.5rem;

        button {
            width: 100%;
        }
    }
</style>