<template>

    <div v-if="!isLoading">
        <div v-if="!isError">
            <!-- действия каталога -->
            <catalog-actions v-if="showActions && searchedProducts.length"
                             :catalogMode="catalogMode"
                             @changeMode="changeMode"
                             @inputSearch="inputSearch"
            ></catalog-actions>

            <!-- список товаров -->
            <div v-if="searchedProducts.length" class="catalog-list"
                 :class="{
                expand: catalogMode === catalogModeEnum.expand,
                compact: catalogMode === catalogModeEnum.compact,
            }"
            >
                <div v-for="product of searchedProducts">
                    <a class="card"
                       v-bind:key="product.id"
                       :href="product.url"
                    >
                        <img class="card-img" :src="product.image" alt="">
                        <h3 class="card-title">{{ product.name }}</h3>
                        <div class="card-section">
                            <p>{{ product.sectionName }}</p>
                        </div>

                        <div class="card-actions">
                            <p class="card-price">{{ product.price }} ₽</p>
                            <button :data-id="product.id"
                                    @click.prevent="pushToCart"
                                    class="card-cart">
                                <i :data-id="product.id" class="fa-solid fa-cart-shopping"></i>
                                В корзину
                            </button>
                        </div>
                    </a>
                </div>


            </div>
            <div v-else class="catalog-plug">
                Здесь пока ничего нет :(
            </div>

            <!-- показать все -->
            <div
                v-if="limitProducts && searchedProducts.length"
                @click="showAll"
                class="catalog-all">
                показать все
            </div>
        </div>
        <div v-else class="catalog-error">
            <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
            {{ errorMessage }}
        </div>
    </div>
    <div v-else class="catalog-loader">
        <span class="loader"></span>
    </div>

</template>

<script>
import axios from "axios";

import CatalogActions from "./CatalogActions.vue"
import { mapActions } from "vuex";

export default {
    name: "Catalog",
    components: {
        'catalog-actions': CatalogActions
    },
    data: () => {
        return {
            products: [],
            catalogModeEnum: {
                expand: 'expand',
                compact: 'compact',
            },
            catalogMode: 'expand',
            searchQuery: '',
            limitProducts: null,
            isError: false,
            errorMessage: '',
            errorDefaultMessage: 'Ошибка загрузки каталога',
            isLoading: false
        }
    },
    props: {
        productsApi: {
            type: String,
            required: true
        },
        showActions: {
            type: Boolean,
            default: true
        },
        limit: {
            type: Number,
            default: null,
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),

        changeMode(mode) {
            this.catalogMode = mode
        },
        inputSearch(query) {
            this.searchQuery = query
        },
        showAll() {
            this.limitProducts = null
        },
        pushToCart(event) {
            const id = event.target.getAttribute('data-id')
            this.pushProduct(id)
            this.pushNotification('Товар добавлен в корзину')
        }
    },
    created() {
        this.isLoading = true

        const fetching = async () => {
            return await axios.get(this.productsApi);
        };

        fetching().then(response => {
            this.products = response.data
            this.isError = false
            this.isLoading = false

            if (this.products.length > this.limit) {
                this.limitProducts = this.limit
            }
        }).catch(error => {
            this.isError = true
            this.products = []
            this.isLoading = false

            if (error.response) {
                this.errorMessage = error.response.data?.message ?? this.errorDefaultMessage
            }
            else {
                this.errorMessage = this.errorDefaultMessage
            }

        })
    },
    computed: {
        searchedProducts() {
            let products = this.products.filter(product => {
                const query = this.searchQuery.toLowerCase()
                return product.name.toLowerCase().includes(query)
            })

            if (this.limitProducts) {
                products = products.slice(0, this.limitProducts)
            }

            return products
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    // список товаров
    .catalog-list {
        margin-top: 2rem;
        display: grid;
        gap: 1.5rem;

        grid-template-columns: 1fr;

        @include media-breakpoint-up($sm) {
            &.compact {
                grid-template-columns: repeat(1, 1fr);
            }
            &.expand {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @include media-breakpoint-up($md) {
            &.compact {
                grid-template-columns: repeat(2, 1fr);
            }
            &.expand {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @include media-breakpoint-up($lg) {
            &.compact {
                grid-template-columns: repeat(3, 1fr);
            }
            &.expand {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }

    // показать все
    .catalog-all {
        display: block;
        text-align: center;
        color: $primary;
        margin-top: 2rem;

        @include transition;

        &:hover {
            cursor: pointer;
            color: darken($primary, 10%);
        }
    }

    // заглушка списка
    .catalog-plug {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: $gray-dark;
        font-size: 18px;
        margin-top: 2rem;

        @include select-off;
    }

    // заглушка списка при ошибке
    .catalog-error {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: #ffacac;
        font-size: 18px;
        margin-top: 2rem;
        gap: 1rem;

        @include select-off;
    }

    // заглушка списка прелоадер
    .catalog-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background-color: $gray-plug;
        border-radius: $border-radius;
        color: $gray-dark;
        font-size: 18px;
        margin-top: 2rem;

        @include select-off;
        @include preloader($gray-dark, 48px);
    }

    // карточка товара
    .card {
        width: 100%;
        padding: 1rem;
        border: none;
        background-color: $white;
        border-radius: $border-radius;

        @include shadow;
        @include transition;

        display: grid;
        grid-template-areas:
            "img"
            "img"
            "title"
            "section"
            "actions";

        &:hover {
            cursor: pointer;
            @include shadow-primary;
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

</style>