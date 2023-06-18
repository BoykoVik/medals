<template>
    <div v-if="items.length"
         class="cart-page">
        <h2 class="cart-page-label">Корзина</h2>

        <div class="cart-content">
            <div class="cart-list">
                <cart-item v-for="item of items"
                           :key="item.key"
                           :title="item.name"
                           :description="item.description"
                           :url="item.url"
                           :image="item.image"
                           :imageAlt="item.imageAlt"
                           :price="item.price"
                           :sectionName="item.sectionName"
                           @deleteItem="deleteItem">
                </cart-item>
                <base-button @click="dropCart"
                             class="cart-drop-btn"
                >
                    Очистить корзину
                </base-button>
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
import {mapActions, mapState} from "vuex";
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
        ...mapActions('Cart', ['clearCart']),

        fetchingItems(ids) {
            if (!ids.length) {
                return
            }

            api.fetchingCartItems(ids).then(response => {
                for (let key in this.products) {
                    const product = this.products[key]

                    this.items.push({
                        key,
                        ...response.data.filter(i => i.id === product.id)[0],
                    })
                }
            }).catch(e => {
                this.items = []
                console.error(e)
            })
        },

        deleteItem(key) {
            this.items = this.items.filter(item => item.key !== key)
        },

        dropCart() {
            this.items.length = 0
            this.clearCart()
        },

        doOrder() {
            const data = this.items.map(item => {
                const count = this.products[item.key].count
                const parameters = []

                for (let key in this.products[item.key].parametersData) {
                    parameters.push({
                        parameter: key,
                        value: this.products[item.key].parametersData[key]
                    })
                }

                return {
                    id: item.id,
                    count,
                    parameters
                }
            })

            api.doOrder(data)
        }
    },
    computed: {
        ...mapState('Cart', ['ids', 'count', 'products']),

        resultPrice() {
            if (!this.items.length) {
                return 0
            }

            return this.items.reduce((price, item) => {
                return price + item.price * this.products[item.key].count
            }, 0)
        }
    },
    beforeMount() {
        this.fetchingItems(this.ids)
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
        background-color: $white;
        position: sticky;
        bottom: 0;
        @include shadow;

        @include media-breakpoint-up($lg) {
            position: sticky;
            top: 120px;
            align-self: start;
            @include shadow-off;
        }

        &-title {
            font-weight: 500;
            font-size: 1.2rem;
            display: flex;
            justify-content: space-between;
        }

        &-intersect {
            height: 1px;
            padding: 0;
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

    .cart-drop-btn {
        margin-top: 1rem;
        float: right;
    }
</style>