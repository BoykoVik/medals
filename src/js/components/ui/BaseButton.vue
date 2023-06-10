<template>
    <button v-on:click="click"
            class="base-btn"
            :class="styleType"
    >
        <slot></slot>
    </button>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "base-button",
    data: () => {
        return {
            count: 0
        }
    },
    props: {
        styleType: {
            type: String,
            default: 'primary' // other values: flat
        }
    },
    methods: {
        click() {
            this.$emit('click')
        }
    }
})
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .base-btn {
        display: inline-block;
        padding: 0.5rem 0.7rem;
        border-radius: $border-radius;

        @include transition;

        &:hover {
            cursor: pointer;
        }

        // варианты кнопок по стилю
        &.primary {
            background-color: $primary;
            color: $white;

            &:hover, &:active {
                background-color: darken($primary, 10%);
            }
        }

        &.flat {
            background-color: #ececec;
            color: $text;

            &:hover, &:active {
                background-color: $primary;
                color: $white;
            }
        }

        &.transparent {
            background-color: transparent;
            color: #838383;

            &:hover, &:active {
                background-color: #ececec;
                color: #5b5b5b;
            }
        }
    }
</style>