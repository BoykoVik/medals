<template>
    <input class="base-input"
           type="text"
           :value="value"
           @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        value: {
            default: '',
        },
    }
}
</script>

    <style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .base-input {
        padding: 0.5rem 0.7rem;
        border-radius: $border-radius;
        border: 1px solid #d9d9d9;
    }
</style>