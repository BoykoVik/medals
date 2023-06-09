<template>
    <div class="cart-page">
        <h2 class="cart-page-label">Корзина</h2>

        <div class="cart-content">
            <div class="cart-list">
                <div v-for="item of itemsWithCount">
                    {{ item.name }} - {{ item.count }}
                </div>
            </div>

            <div class="cart-result">
                Итого
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import axios from "axios";

export default {
    name: 'CartPage',
    data() {
        return {
            items: []
        }
    },
    props: {
        cartPositionsApi: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('CartPage', ['init']),

        fetchingPositions(productIds) {
            const fetching = async (productIds) => {
                return await axios.post(this.cartPositionsApi, {
                    data: productIds
                })
            }

            fetching(productIds).then(response => {
                this.items = response.data.products
            }).catch(e => {
                this.items = []
                console.error('Ошибка загрузки товаров в корзине')
            })
        }
    },
    computed: {
        ...mapState('CartPage', ['count', 'productCounts', 'productIds']),

        itemsWithCount() {
            return this.items.map(item => {
                item.count = this.productCounts[item.id]

                return item
            })
        }
    },
    beforeMount() {
        this.init()
        this.fetchingPositions(this.productIds)
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

        &>* {
            border: 1px solid #e5e5e5;
            border-radius: $border-radius;
            padding: 1rem;
        }

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;

        @include media-breakpoint-up($md) {
            grid-template-columns: 8fr 4fr;
        }
    }
</style>