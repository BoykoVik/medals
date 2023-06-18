<template>
    <div>
        <div class="catalog-item"
             :key="product.id"
        >
            <div class="picture">
                <a :href="product.url">
                    <img :src="product.image"
                         :alt="product.imageAlt">
                </a>
            </div>

            <div class="content">
                <div>
                    <h3 class="title">{{ product.name }}</h3>
                    <div v-if="product.sectionName"
                         class="section"
                    >
                        {{ product.sectionName }}
                    </div>
                </div>

                <div class="actions">
                    <p class="price">{{ product.price }} ₽</p>
                    <button @click.prevent="pushToCart"
                            class="cart"
                    >
                        <i class="fa-solid fa-cart-shopping"></i>В корзину
                    </button>
                </div>
            </div>
        </div>

        <base-modal v-if="product.parameters.length"
                    :show="isShowModal"
                    @hide="closeModal"
        >
            <product-parameters :parameterNames="product.parameters"
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
import {mapActions, mapGetters, mapState} from "vuex";
import BaseButton from "../ui/BaseButton.vue";
import ProductParameters from "./ProductParameters.vue";
import BaseModal from "../ui/BaseModal.vue";

export default {
    name: 'CatalogItem',
    components: {BaseModal, ProductParameters, BaseButton},
    data() {
        return {
            hasParameters: false,
            isShowModal: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification', 'pushNotificationLight']),
        ...mapActions('Product', ['initProduct', 'validate', 'destroy']),

        /**
         * Кнопка добавить в корзине на карточке товара
         */
        pushToCart() {
            // если есть параметры, то нужно открыть модалку
            if (this.hasParameters) {
                this.initProduct({
                    product: this.getProduct(this.id)
                })
                this.isShowModal = true

                return
            }

            this.pushProduct({
                id: this.product.id,
                parametersData: this.parametersData
            })
            this.pushNotification('Товар добавлен в корзину')
        },

        /**
         * Кнопка добавить в корзину в модалке
         */
        pushToCartDialog() {
            this.validate()
                .then(
                    () => {
                        this.pushProduct({
                            id: this.id,
                            parametersData: this.parametersData
                        })
                        this.isShowModal = false
                        this.pushNotification('Товар добавлен в корзину')
                        this.destroy()

                    },
                    () => {
                        this.pushNotificationLight('Укажите все параметры товара')
                    }
                )
        },

        closeModal() {
            this.isShowModal = false
            this.destroy()
        }
    },
    computed: {
        ...mapState('Product', ['parametersData']),
        ...mapGetters('Catalog', ['getProduct']),

        product() {
            return this.getProduct(this.id)
        }
    },
    mounted() {
        if (this.product.parameters.length) {
            this.hasParameters = true
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .catalog-item-wrapper {

    }

    // карточка товара
    .catalog-item {
        width: 100%;
        border: none;
        background-color: $white;
        border-radius: $border-radius;

        @include shadow;
        @include transition;

        &:hover {
            @include shadow-primary;
        }
    }

    .picture {
        border-radius: $border-radius $border-radius 0 0;

        img {
            border-radius: $border-radius $border-radius 0 0;

            height: 250px;
            object-position: center;
            object-fit: cover;
            width: 100%;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1rem 1rem 1rem;
        height: 170px;

        // название
        .title {
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
        .section {
            grid-area: section;
            margin-top: 0.5rem;
            margin-bottom: 2rem;

            display: inline-block;
            font-weight: 400;
            padding: 0.2rem 0.5rem;
            color: #7e7d7d;
            font-size: 11px;
            background-color: #eaeaea;
            border-radius: $border-radius;
        }

        // действия
        .actions {
            grid-area: actions;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-self: self-end;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 15px 0;
        }

        // цена
        .price {
            color: $primary;
            font-weight: 500;
            margin-bottom: 0;
        }

        // кнопка добавить в корзину
        .cart {
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