<template>
    <div>
        <label :for="name"
               class="product-parameter-item-label"
        >
            {{ label }}
        </label>

        <select :id="name"
                class="product-parameter-item-select"
                v-model="selectedParameter"
        >
            <option disabled :value="undefined">Выберите из списка</option>
            <option v-for="item of items"
                    :value="item.id"
            >
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: 'ProductParameterItem',
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
    },
    methods: {
        ...mapActions('Product', ['setParameter'])
    },
    computed: {
        ...mapState('Product', ['parametersData', 'steps']),

        parameter() {
            if (this.steps) {
                return this.parametersData[this.name]
            }

            return 7
        },

        selectedParameter: {
            get() {
                return this.parameter
            },
            set(selectedValue) {
                this.setParameter({
                    parameter: this.name,
                    value: selectedValue
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../style/sys/vars";
@import "../../../style/sys/mixins";

.product-parameter-item-select {
    padding: 0.5rem 0.7rem;
    border-radius: $border-radius;
    border: 1px solid #d9d9d9;
    width: 100%;
}

.product-parameter-item-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
}
</style>