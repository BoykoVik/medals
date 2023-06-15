<template>
    <div class="catalog-item-wrapper">
        <a class="catalog-item"
           v-bind:key="this.id"
           :href="this.url"
        >
            <img class="catalog-item-img" :src="this.image" :alt="this.imageAlt">
            <h3 class="catalog-item-title">{{ this.name }}</h3>
            <div class="catalog-item-section">
                <p>{{ this.sectionName }}</p>
            </div>

            <div class="catalog-item-actions">
                <p class="catalog-item-price">{{ this.price }} ₽</p>
                <button @click.prevent="pushToCart"
                        class="catalog-item-cart"
                >
                    <i class="fa-solid fa-cart-shopping"></i>В корзину
                </button>
            </div>
        </a>

        <base-modal v-if="parameters.length"
                    :show="isShowModal"
                    @hide="isShowModal = false"
        >
            <div class="catalog-item-dialog-label">Укажите параметры заказа</div>
            <product-parameters :parameterTypes="parameters"
                                :parametersData.sync="parametersData"
            ></product-parameters>
            <base-button @click="pushToCartDialog"
                         class="catalog-item-cart-dialog"
            >
                <i class="fa-solid fa-cart-shopping"></i>В корзину
            </base-button>
        </base-modal>
    </div>

</template>

<script>
import {mapActions} from "vuex";
import BaseButton from "../ui/BaseButton.vue";
import ProductParameters from "./ProductParameters.vue";
import BaseModal from "../ui/BaseModal.vue";

export default {
    name: 'CatalogItem',
    components: {BaseModal, ProductParameters, BaseButton},
    data() {
        return {
            parametersData: {},
            isShowModal: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        sectionName: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        parameters: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification', 'pushNotificationLight']),

        pushToCart() {
            for (let parameter of this.parameters) {
                if (this.parametersData[parameter] === undefined) {
                    this.isShowModal = true
                    return
                }
            }

            this.pushProduct({
                id: this.id,
                parametersData: this.parametersData
            })
            this.pushNotification('Товар добавлен в корзину')
            this.parametersData = {}
        },

        pushToCartDialog() {
            for (let parameter of this.parameters) {
                if (this.parametersData[parameter] === undefined) {
                    this.parametersData = {}
                    this.pushNotificationLight('Укажите все параметры товара')
                    return
                }
            }

            this.isShowModal = false
            this.pushProduct({
                id: this.id,
                parametersData: this.parametersData
            })
            this.pushNotification('Товар добавлен в корзину')
            this.parametersData = {}
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .catalog-item-wrapper {
        position: relative;

        @include shadow;
        @include transition;

        &:hover {
            @include shadow-primary;

            .catalog-item-parameters {
                display: block;
            }
        }
    }

    // карточка товара
    .catalog-item {
        width: 100%;
        padding: 1rem;
        border: none;
        background-color: $white;
        border-radius: $border-radius;

        display: grid;
        grid-template-areas:
                "img"
                "img"
                "title"
                "section"
                "actions";

        &:hover {
            cursor: pointer;
        }

        // картинка
        &-img {
            grid-area: img;
            border-radius: $border-radius;

            height: 250px;
            object-position: center;
            object-fit: cover;
            width: 100%;
        }

        // название
        &-title {
            grid-area: title;
            font-weight: 500;
            margin-top: 1rem;
            color: $text;

            @include transition;

            &:hover {
                color: $primary;
            }
        }

        // раздел
        &-section {
            grid-area: section;
            margin-top: 0.7rem;
            margin-bottom: 2rem;

            p {
                display: inline;
                font-weight: 400;
                padding: 0.3rem 0.6rem;
                color: #7e7d7d;
                font-size: 12px;
                background-color: #eaeaea;
                border-radius: 20px;
            }
        }

        // цена
        &-price {
            color: $primary;
            font-weight: 500;
            margin-bottom: 0;
        }

        // действия
        &-actions {
            grid-area: actions;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px 0;
        }

        // кнопка добавить в корзину
        &-cart {
            padding: 0.3rem 1rem;
            background-color: $primary;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: $border-radius;
            color: $white;
            outline: none;
            width: 100%;

            @include transition;

            &:hover {
                background-color: darken($primary, 10%);
            }
        }
    }

    .catalog-item-dialog-label {
        font-weight: 500;
        margin-top: 0.5rem;
    }

    .catalog-item-cart-dialog {
        text-align: center;
        margin-top: 2rem;
        width: 100%;

        @include media-breakpoint-up($sm) {
            width: 180px;
        }

        i {
            margin-right: 5px;
        }
    }
</style>