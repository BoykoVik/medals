<template>
    <input class="base-input-number"
           type="text"
           :value="value"
           @input="onInput">
</template>

<script>
export default {
    name: 'BaseInputNumber',
    props: {
        value: {
            default: '',
        },
    },
    methods: {
        onInput(event) {
            let value = event.target.value;

            if (value === '') {
                value = "1"
                event.target.value = '1'
            }

            if (isNaN(value) || value.length > 5 || parseFloat(value) < 1) {
                event.target.value = this.value;
            } else {
                this.$emit("input", parseInt(value, 10));
            }
        },
    },
}
</script>

    <style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .base-input-number {
        padding: 0.5rem 0.7rem;
        border-radius: $border-radius;
        border: 1px solid #d9d9d9;
        width: 100%;

        @include transition;

        &:hover, &:focus {
            border-color: $primary-light;
        }
    }
</style>