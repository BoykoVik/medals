<template>
    <div class="product">
        <div class="product-title">{{ this.title }}</div>
        <div class="product-cart">
            <button :data-id="this.id"
                    @click.prevent="pushToCart"
                    class="card-cart">
                <i :data-id="this.id" class="fa-solid fa-cart-shopping"></i>
                В корзину
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'Product',
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: false
        },
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),

        pushToCart(event) {
            const id = event.target.getAttribute('data-id')
            this.pushProduct(id)
            this.pushNotification('Товар добавлен в корзину')
        }
    }
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
</style>