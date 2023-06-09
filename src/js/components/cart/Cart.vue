<template>
    <a :href="href">
        <div class="fa-solid fa-cart-shopping fa-xl cart">
            <div v-if="count"
                 class="cart-count">
                {{ count }}
            </div>
        </div>
    </a>
</template>

<script>
import { mapActions, mapGetters } from 'vuex/dist/vuex.esm.browser'

export default {
    name: 'Cart',
    computed: {
        ...mapGetters('Cart', ['count', 'hash']),
    },
    methods: {
        ...mapActions('Cart', ['initCart']),
    },
    props: {
        href: {
            type: String,
            required: true
        }
    },
    beforeMount() {
        this.initCart()
    }
}

</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .cart {
        margin-right: 5px;
        position: relative;
        border-radius: $border-radius;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary;
        justify-self: flex-end;
        width: 40px;
        height: 40px;

        @include transition;

        &:hover {
            color: darken($primary, 10%);
            cursor: pointer;
        }
    }

    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        font-size: 9px!important;
        background-color: $danger;
        color: $white;
        width: 20px;
        aspect-ratio: 1/1;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>