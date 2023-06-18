<template>
    <base-input :value="value"
                @input="inputValue"
                v-mask="'+7 (###) ### ## ##'"
    >
    </base-input>
</template>

<script>
import BaseInput from "./BaseInput.vue";

export default {
    name: 'BaseInputPhoneNumber',
    components: {BaseInput},
    props: {
        value: {
            default: ''
        }
    },
    methods: {
        inputValue(value) {
            this.$emit('input', value)
        }
    }
}
</script>

<style scoped lang="scss">

</style>