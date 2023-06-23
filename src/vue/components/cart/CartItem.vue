<template>
    <div class="cart-item">

        <div class="cart-item-img">
            <a :href="url">
                <img :src="image" :alt="imageAlt">
            </a>
        </div>

        <div class="cart-item-info">
            <a class="cart-item-info-title" :href="url">{{ this.title }}</a>
            <p class="cart-item-info-description">{{ this.description }}</p>

            <div v-if="sectionName" class="cart-item-info-section">
                <p>{{ this.sectionName }}</p>
            </div>

            <div class="cart-item-info-parameters">
                <div v-for="parameterLabel of parameterLabels" class="cart-item-info-parameters-item">
                    <b>{{ parameterLabel.parameter }}</b>: {{ parameterLabel.value.toLowerCase() }}
                </div>
            </div>
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
            <base-button
                :style-type="'transparent'"
                @click="deleteItem"
            >
                <i class="fa-solid fa-trash"></i>
            </base-button>
        </div>

        <div class="cart-item-price">
            <strong>{{ this.price * this.count }} ₽</strong>
            <span v-if="count > 1">{{ this.price }} ₽ &#215; {{ this.count }}</span>
        </div>

    </div>
</template>

<script>
import BaseInputNumber from "../ui/BaseInputNumber.vue";
import BaseButton from "../ui/BaseButton.vue";
import {mapActions, mapState} from "vuex";
import axios from "axios";
import api from "../../api/api";
import session from "../../helpers/session";

export default {
    name: 'CartItem',
    components: {
        BaseButton,
        BaseInputNumber
    },
    data() {
        return {
            count: 1,
            parameterLabels: []
        }
    },
    props: {
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
        },
        sectionName: {
            default: undefined
        },
        imageAlt: {
            default: undefined
        },
    },
    methods: {
        ...mapActions('Cart', ['changeCount', 'deleteProduct']),

        initParameterLabels() {
            const parametersData = this.products[this.$vnode.key].parametersData

            for (let key in parametersData) {
                const tuple = {
                    parameter: key,
                    value: parametersData[key],
                }

                // попытка достать значения из кэша сессии
                const labels = session.getItemHash(tuple)
                if (labels) {
                    this.parameterLabels.push(labels)
                    continue
                }

                api.fetchingParameterLabel(tuple).then(response => {
                    this.parameterLabels.push(response.data)
                    session.setItemHash(tuple, response.data)
                }).catch(e => {
                    console.error(e)
                })
            }
        },

        incrementCount() {
            this.count++
            this.changeCount({
                key: this.$vnode.key,
                count: this.count
            })
        },
        decrementCount() {
            this.count--
            this.changeCount({
                key: this.$vnode.key,
                count: this.count
            })
        },
        onInput(value) {
            this.changeCount({
                key: this.$vnode.key,
                count: value
            })
        },

        deleteItem() {
            this.deleteProduct(this.$vnode.key)
            this.$emit('deleteItem', this.$vnode.key)
        },
    },
    computed: {
        ...mapState('Cart', ['products']),
    },
    watch: {
        count: function (newValue, oldValue) {
            if (isNaN(newValue) || parseFloat(newValue) < 1) {
                this.count = oldValue
            }
        }
    },
    mounted() {
        this.count = this.products[this.$vnode.key].count
        this.initParameterLabels()
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

    grid-template-columns: 1fr;
    grid-template-areas:
            "img img"
            "info info"
            "count count"
            "price actions";

    @include media-breakpoint-up($md) {
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas:
                "img info price"
                "img count actions";
    }

    & + & {
        margin-top: 1rem;
    }

    &-img {
        grid-area: img;
    }

    &-info {
        grid-area: info;
    }

    &-count {
        grid-area: count;
    }

    &-actions {
        grid-area: actions;
    }

    &-price {
        grid-area: price;
    }
}

.cart-item-img {
    img {
        height: 300px;
        width: 100%;

        @include media-breakpoint-up($md) {
            width: 100%;
            height: 190px;
        }

        border-radius: $border-radius;

        object-fit: cover;
        object-position: center;
    }
}

.cart-item-info {
    &-title {
        font-weight: 500;
        color: $text;
        font-size: 1.2rem;
    }

    &-description {
        margin-top: 0.5rem;
        font-size: 0.85rem;
    }

    &-section {
        margin-top: 0.5rem;

        p {
            display: inline;
            font-weight: 400;
            padding: 0.2rem 0.4rem;
            color: #7e7d7d;
            font-size: 10px;
            background-color: #eaeaea;
            border-radius: 5px;
        }
    }

    &-parameters {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        &-item {
            display: inline;
            font-weight: 400;
            padding: 0.3rem 0.6rem;
            color: $primary;
            font-size: 12px;
            background-color: $primary-tag;
            border-radius: 5px;
        }
    }
}


.cart-item-count {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    input {
        text-align: center;
        width: 80px;
    }

    @include media-breakpoint-up($md) {
        align-self: end;
    }
}

.cart-item-actions {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;

    @include media-breakpoint-up($md) {
        align-self: end;
    }
}

.cart-item-price {
    display: flex;
    font-weight: 500;
    flex-direction: column;

    @include media-breakpoint-up($md) {
        align-items: flex-end;
    }

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