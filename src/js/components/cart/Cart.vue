<template>
    <div class="fa-solid fa-cart-shopping fa-xl cart">
        <div v-if="count"
             class="cart-count">
            {{ count > 999 ? 999 : count }}
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: 'Cart',
    computed: {
        ...mapState('Cart', ['count']),
    },
    methods: {
        ...mapActions('Cart', ['initCart']),
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
    font-size: 9px !important;
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