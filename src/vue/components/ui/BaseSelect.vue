<template>
    <div>
        <label :for="id" class="base-select-label">
            {{ label }}
        </label>
        <select :id="id"
                v-model="selectedValue"
                class="base-select"
        >
            <option class="select" disabled value="">Выберите из списка</option>
            <option v-for="option in optionsData"
                    :value="option.value"
                    :selected="option.selected"
            >
                {{ option.text }}
            </option>
        </select>
    </div>

</template>

<script>
export default {
    props: {
        value: {
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        id: {
            type: String,
        },
        label: {
            type: String,
        }
    },
    computed: {
        selectedValue: {
            get() {
                return this.value
            },
            set(selectedValue) {
                this.$emit('input', selectedValue)
            }
        },

        optionsData() {
            return this.options.map(option => ({
                value: option.id,
                text: option.name,
                selected: option.id === this.selectedValue ? 'selected' : ''
            }))
        }
    },
    watch: {
        value(newValue) {
            this.selectedValue = newValue
        },
        selectedValue(newValue) {
            if (newValue) {
                this.$emit('input', {
                    id: this.id,
                    value: newValue
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../style/sys/vars";
@import "../../../style/sys/mixins";

.base-select {
    padding: 0.5rem 0.7rem;
    border-radius: $border-radius;
    border: 1px solid #d9d9d9;
    width: 100%;
}

.base-select-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
}
</style>