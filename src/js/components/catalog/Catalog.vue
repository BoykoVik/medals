<template>
    <div>
        <catalog-actions v-if="showActions"
            :catalogMode="catalogMode"
            @changeMode="changeMode"
            @inputSearch="inputSearch"
        ></catalog-actions>

        <div class="card-list"
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

                    <div class="card-actions">
                        <p class="card-price">{{ product.price }} ₽</p>
                        <button class="card-cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            В корзину
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import CatalogActions from "./CatalogActions.vue"

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
            searchQuery: ''
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
        }
    },
    methods: {
        changeMode(mode) {
            this.catalogMode = mode
        },
        inputSearch(query) {
            this.searchQuery = query
        }
    },
    created() {
        console.log(this.productsApi)

        const fetching = async () => {
            return await axios.get(this.productsApi);

        };

        fetching().then(response => {
            this.products = response.data
        }).catch(() => {
            console.error('Ошибка загрузки каталога')
        })
    },
    computed: {
        searchedProducts() {
            return this.products.filter(product => {
                const query = this.searchQuery.toLowerCase()
                return product.name.toLowerCase().includes(query)
            })
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .card-list {
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

</style>