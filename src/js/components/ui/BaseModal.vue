<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog-inner">
            <div @click.stop class="dialog-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BaseModal",
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
        display: flex;
        background-color: rgba(0, 0, 0, 0.65);
    }

    .dialog-inner {
        width: 100%;
        margin-inline: 15px;
        margin-top: auto;
        margin-bottom: auto;
    }

    .dialog-wrapper {
        margin: auto;
        display: flex;
        padding: 30px;
        background-color: white;
        border-radius: 5px;
        position: relative;

        width: 100%;

        @include media-breakpoint-up($sm) {
            width: 400px;
        }
    }
</style>
