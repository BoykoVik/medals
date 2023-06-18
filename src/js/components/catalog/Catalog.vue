<template>
    <div v-if="!isLoading">
        <div v-if="!isError">
            <catalog-actions v-if="showActions"
                             :is-mode-expand="isModeExpand"
                             @changeMode="changeMode"
                             @inputSearch="inputSearch"
            ></catalog-actions>

            <catalog-list :products="searchedProducts"
                          :limit="limitProducts"
                          :show-actions="showActions"
                          :is-mode-expand="isModeExpand"
                          @showAll="limitProducts = null"
            ></catalog-list>
        </div>
        <div v-else class="catalog-plug catalog-error">
            <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
            {{ errorMessage }}
        </div>
    </div>
    <div v-else class="catalog-plug catalog-loader">
        <span class="loader"></span>
    </div>
</template>

<script>
import CatalogActions from "./CatalogActions.vue"
import CatalogList from "./CatalogList.vue";

import api from "../../api/api";
import error from "../../mixins/error";

export default {
    name: "Catalog",
    components: {
        CatalogList,
        CatalogActions
    },
    mixins: [error],
    data: () => {
        return {
            products: [],
            isModeExpand: true,
            searchQuery: '',
            limitProducts: null,
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
            this.isModeExpand = mode
        },
        inputSearch(query) {
            this.searchQuery = query
        }
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
    },
    created() {
        this.isLoading = true

        // загрузка товаров
        api.fetchingProducts(this.productsApi).then(response => {
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
    }
}
</script>

<style scoped lang="scss">
@import "../../../style/sys/vars";
@import "../../../style/sys/mixins";

.catalog-plug {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-top: 2rem;
    font-size: 18px;

    @include select-off;
}

// заглушка каталога при ошибке
.catalog-error {
    background-color: $gray-plug;
    border-radius: $border-radius;
    color: #ffacac;
    gap: 1rem;
}

// прелоадера каталога
.catalog-loader {
    background-color: $gray-plug;
    border-radius: $border-radius;
    color: $gray-dark;

    @include preloader($gray-dark, 48px);
}
</style>