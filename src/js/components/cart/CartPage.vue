<template>
    <div class="cart-page">
        <h2 class="cart-page-label">Корзина</h2>

        <div class="cart-content">
            <div class="cart-list">
                Список
            </div>

            <div class="cart-result">
                Итого
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
    name: 'CartPage',
    methods: {
        ...mapActions('CartPage', ['init'])
    },
    beforeMount() {
        this.init()
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