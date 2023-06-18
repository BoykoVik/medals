<template>
    <div class="product-parameters">
        <div v-for="parameter of parameters" class="product-parameters-type">
            <base-select :id="parameter.type"
                         v-model="parametersData[parameter.type]"
                         :options="parameter.items"
                         :label="parameter.label"
                         class="product-parameter-type-select"
                         @input="selectParameter"
            ></base-select>
        </div>
    </div>
</template>

<script>
import BaseSelect from "../ui/BaseSelect.vue"
import api from "../../api/api"
import session from "../../helpers/session"

export default {
    name: 'ProductParameters',
    components: {BaseSelect},
    data() {
        return {
            parameters: []
        }
    },
    props: {
        parameterTypes: {
            type: Array,
            required: true
        },
        parametersData: {
            type: Object,
            required: true
        }
    },
    methods: {
        init() {
            this.parameterTypes.forEach(parameterType => {
                const key = {
                    component: 'ProductParameters',
                    type: parameterType
                }

                const cache = session.getItemHash(key)
                if (cache) {
                    this.parameters.push({
                        type: parameterType,
                        label: cache.label,
                        items: cache.items
                    })
                }
                else {
                    api.fetchingParameter(parameterType).then(response => {
                        this.parameters.push({
                            type: parameterType,
                            label: response.data.label,
                            items: response.data.items
                        })

                        session.setItemHash(key, {
                            type: parameterType,
                            label: response.data.label,
                            items: response.data.items
                        })
                    }).catch(error => {
                        console.error('Parameters loading error')
                    })
                }
            })
        },

        selectParameter(data) {
            this.parametersData[data.id] = data.value
        },
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