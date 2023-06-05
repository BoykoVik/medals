<template>
    <button v-on:click="click" class="base-btn">
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
        padding: 0.3rem 0.9rem;
        background-color: #ececec;
        border-radius: $border-radius;
        color: $text;

        @include transition;

        &:hover {
            cursor: pointer;
            background-color: $primary;
            color: $white;
        }

        &.active {
            background-color: $primary;
            color: $white;
        }
    }
</style>