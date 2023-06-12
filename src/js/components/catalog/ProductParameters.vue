<template>
    <div class="product-parameters">
        <div v-for="parameter of parameters" class="product-parameters-type">
            <base-select :id="parameter.type"
                         :options="parameter.items"
                         :label="parameter.label"
                         class="product-parameter-type-select"
                         @input="selectParameter"
            ></base-select>
        </div>
    </div>
</template>

<script>
import BaseSelect from "../ui/BaseSelect.vue";
import api from "../../api/api";
import {mapActions, mapState} from "vuex";

export default {
    name: 'ProductParameters',
    components: {BaseSelect},
    methods: {
        ...mapActions('Product', ['pushParameter', 'setParameter']),

        init() {
            this.product.parameters.forEach(parameterType => {
                api.fetchingParameter(parameterType).then(response => {
                    this.pushParameter({
                        type: parameterType,
                        label: response.data.label,
                        items: response.data.items
                    })
                }).catch(error => {
                    console.error('Parameters loading error')
                })
            })
        },

        selectParameter(data) {
            this.setParameter({
                type: data.id,
                value: data.value,
            })
        }
    },
    computed: {
        ...mapState('Product', ['product', 'parameters'])
    },
    created() {
        this.init()
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .product-parameters {
        margin-top: 1rem;

        &-type {
            margin-top: 1rem;
        }
    }
</style>