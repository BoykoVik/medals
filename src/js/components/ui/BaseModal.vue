<template>
    <div class="dialog"
         :class="{ active: show }"
         @click="hideDialog">
        <div class="dialog-inner">
            <div @click.stop class="dialog-wrapper">
                <base-button :style-type="'transparent'"
                             dialog-hide
                             @click="hideDialog"
                             class="dialog-hide"
                >
                    <i class="fa-solid fa-xmark"></i>
                </base-button>
                <div class="dialog-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BaseButton from "./BaseButton.vue";

export default {
    name: "BaseModal",
    components: {BaseButton},
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('hide');
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .dialog {
        z-index: 1001;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.65);

        display: none;

        &.active {
            display: flex;
        }
    }

    .dialog-inner {
        width: 100%;
        margin-inline: 15px;
        margin-top: auto;
        margin-bottom: auto;
    }

    .dialog-wrapper {
        margin: auto;
        background-color: white;
        border-radius: 5px;
        position: relative;
        width: 100%;

        @include media-breakpoint-up($sm) {
            width: 400px;
        }
    }

    .dialog-hide {
        position: absolute;
        top: 0;
        right: 0;
    }

    .dialog-content {
        padding: 2rem;
    }
</style>
