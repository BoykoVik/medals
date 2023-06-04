<template>
    <button class="base-btn">
        <slot></slot>
    </button>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "base-button"
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

        i {
            margin-right: 0.2rem;
        }

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