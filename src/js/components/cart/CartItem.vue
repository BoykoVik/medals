<template>
    <div class="cart-item">

        <div class="cart-item-first">
            <a class="cart-item-title" :href="url">
                <img class="cart-item-image" :src="image" alt="">
            </a>
        </div>

        <div class="cart-item-second">
            <a class="cart-item-title" :href="url">{{ this.title}}</a>
            <p class="cart-item-description">{{ this.description }}</p>
        </div>

        <div class="cart-item-count">
            <base-button
                :style-type="'flat'"
                @click="decrementCount"
            >
                <i class="fa-solid fa-minus"></i>
            </base-button>

            <base-input-number
                v-model="count"
                @input="onInput"
            >
            </base-input-number>

            <base-button
                :style-type="'flat'"
                @click="incrementCount"
            >
                <i class="fa-solid fa-plus"></i>
            </base-button>
        </div>

        <div class="cart-item-actions">
            <div class="cart-item-price">
                <strong>{{ this.price * this.count }} ₽</strong>
                <span v-if="count > 1">{{ this.price }} ₽ &#215; {{ this.count }}</span>
            </div>

            <base-button
                :style-type="'transparent'"
                @click="deleteItem"
            >
                <i class="fa-solid fa-trash"></i>
            </base-button>
        </div>

    </div>
</template>

<script>
import BaseInputNumber from "../ui/BaseInputNumber.vue";
import BaseButton from "../ui/BaseButton.vue";
import {mapActions, mapState} from "vuex";

export default {
    name: 'CartItem',
    components: {
        BaseButton,
        BaseInputNumber
    },
    data() {
        return {
            count: 1
        }
    },
    props: {
        id: {
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        price: {
            required: true
        },
        image: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('Cart', ['changeCount', 'deleteProduct']),

        incrementCount() {
            this.count++
            this.updateCount(this.id, this.count)
        },
        decrementCount() {
            this.count--
            this.updateCount(this.id, this.count)
        },
        onInput(value) {
            this.updateCount(this.id, value)
        },

        deleteItem() {
            this.deleteProduct(this.id)
            this.$emit('deleteItem', this.id)
        },
        updateCount(id, count) {
            this.changeCount({ id, count })
        }
    },
    computed: {
        ...mapState('Cart', ['products']),

        dd() {
            console.log(this.products)
            return this.products
        }
    },
    beforeMount() {
        this.count = this.products[this.id]
    },
    watch: {
        count: function(newValue, oldValue) {
            if (isNaN(newValue) || parseFloat(newValue) < 1) {
                this.count = oldValue
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .cart-item {
        padding: 1rem;
        border: 1px solid #e5e5e5;
        border-radius: $border-radius;

        display: grid;
        grid-gap: 1rem;

        grid-template-columns: 120px 5fr 2fr 2fr;

        & + & {
            margin-top: 1rem;
        }
    }

    .cart-item-image {
        width: 120px;
        height: 100px;
        border-radius: $border-radius;

        object-fit: cover;
        object-position: center;
    }

    .cart-item-title {
        color: $text;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .cart-item-description {
        margin-top: 0.2rem;
    }

    .cart-item-count {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;

        input {
            text-align: center;
        }
    }

    .cart-item-actions {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart-item-price {
        display: flex;
        align-items: flex-end;
        font-weight: 500;
        flex-direction: column;

        strong {
            font-size: 1.2rem;
        }

        span {
            margin-top: 0.2rem;
            font-size: 0.8rem;
            font-weight: 400;
            color: #868686;
        }

    }
</style>