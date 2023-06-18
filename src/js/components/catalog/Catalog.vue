<template>
    <div v-if="!isLoading">
        <div v-if="!isError">
            <catalog-actions></catalog-actions>
            <catalog-list></catalog-list>
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
import {mapActions, mapState} from "vuex";

export default {
    name: "Catalog",
    components: {
        CatalogList,
        CatalogActions
    },
    mixins: [error],
    data: () => {
        return {
            searchQuery: '',
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
        ...mapActions('Catalog', ['initCatalog']),
    },
    created() {
        this.isLoading = true

        // загрузка товаров
        api.fetchingProducts(this.productsApi).then(response => {
            this.isError = false
            this.isLoading = false

            let limitProducts = null
            if (response.data.length > this.limit) {
                limitProducts = this.limit
            }

            this.initCatalog({
                products: response.data,
                limit: limitProducts,
                showActions: this.showActions
            })
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