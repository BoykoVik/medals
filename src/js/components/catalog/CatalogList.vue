<template>
    <div class="catalog-list-wrapper">
        <!-- список товаров -->
        <div v-if="products.length"
             class="catalog-list"
             :class="{expand: isModeExpand}"
        >
            <catalog-item v-for="product of products"
                          :key="product.id"
                          :product="product"
            ></catalog-item>
        </div>
        <div v-else class="catalog-list-plug">
            Здесь пока ничего нет :(
        </div>

        <!-- показать все -->
        <div v-if="limit && products.length"
             @click="showAll"
             class="catalog-list-all"
        >
            показать все
        </div>
    </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
    name: 'CatalogList',
    components: {CatalogItem},
    props: {
        products: {
            type: Array,
            required: true
        },
        showActions: {
            type: Boolean,
            default: true
        },
        limit: {
            type: Number,
            default: null,
        },
        isModeExpand: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        showAll() {
            this.$emit('showAll')
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
            grid-template-columns: repeat(1, 1fr);

            &.expand {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @include media-breakpoint-up($md) {
            grid-template-columns: repeat(2, 1fr);

            &.expand {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @include media-breakpoint-up($lg) {
            grid-template-columns: repeat(3, 1fr);

            &.expand {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }

    // показать все
    .catalog-list-all {
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
    .catalog-list-plug {
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
</style>