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
                <catalog-item v-for="product of searchedProducts"
                              :key="product.id"
                              :id="product.id"
                              :name="product.name"
                              :description="product.description"
                              :price="product.price"
                              :url="product.url"
                              :image="product.image"
                              :image-alt="product.imageAlt"
                              :section-name="product.sectionName"
                              :parameters="product.parameters"
                ></catalog-item>

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
import CatalogItem from "./CatalogItem.vue";

export default {
    name: "Catalog",
    components: {
        CatalogItem,
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
        changeMode(mode) {
            this.catalogMode = mode
        },
        inputSearch(query) {
            this.searchQuery = query
        },
        showAll() {
            this.limitProducts = null
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

            if (error?.response?.message) {
                this.errorMessage = error.response.data.message
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

</style>