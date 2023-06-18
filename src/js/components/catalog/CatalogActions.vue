<template>
    <div class="catalog-actions">
        <div class="catalog-search">
            Поиск
            <input
                @input="inputSearch"
                type="text"
                placeholder="Введите текст для поиска"
            />
            <a><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>

        <!-- кнопки для управления размером сетки каталога -->
        <div class="catalog-actions-right">
            <base-button
                @click="unsetModeExpand"
                :class="{
                    primary: !isModeExpand,
                    flat: isModeExpand,
                }"
            >
                <i class="fa-solid fa-table-cells-large"></i>
            </base-button>

            <base-button
                @click="setModeExpand"
                :class="{
                    primary: isModeExpand,
                    flat: !isModeExpand,
                }"
            >
                <i class="fa-solid fa-table-cells"></i>
            </base-button>
        </div>
    </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
    name: "CatalogActions",
    components: {
        BaseButton
    },
    props: {
        isModeExpand: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        unsetModeExpand() {
            this.$emit('changeMode', false)
        },
        setModeExpand() {
            this.$emit('changeMode', true)
        },
        inputSearch(event) {
            this.$emit('inputSearch', event.target.value)
        }
    },
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .catalog-actions {
        margin-top: 2rem;
        justify-content: space-between;

        & + & {
            margin-left: 5px;
        }

        display: none;
        @include media-breakpoint-up($sm) {
            display: flex;
        }
    }

    .catalog-search {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;

        input {
            padding: 0.5rem 55px 0.5rem 1rem;
            border: 1px solid $gray;
            border-radius: $border-radius;

            width: 100%;

            @include transition;

            &:hover, &:focus {
                border: 1px solid $primary-light;
            }
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 42px;
            color: $primary;
            border-radius: 0 $border-radius $border-radius 0;

            &:hover {
                color: $primary;
            }
        }
    }

    .catalog-actions-right {
        display: flex;
        gap: 5px;
    }
</style>