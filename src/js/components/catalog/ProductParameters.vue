<template>
    <div class="product-parameters">
        <div class="product-parameters-title">Укажите параметры заказа</div>
        <product-parameter-item v-for="parameter of parameters"
                                :key="parameter.id"
                                :name="parameter.name"
                                :label="parameter.label"
                                :items="parameter.items"
                                class="product-parameters-item"
        >
        </product-parameter-item>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

import ProductParameterItem from "./ProductParameterItem.vue";

import api from "../../api/api"
import session from "../../helpers/session"

export default {
    name: 'ProductParameters',
    components: {ProductParameterItem},
    data() {
        return {
            parameters: []
        }
    },
    props: {
        parameterNames: {
            type: Array,
            required: true
        }
    },
    methods: {
        init() {
            this.parameterNames.forEach(parameterName => {
                const key = {
                    component: 'ProductParameters',
                    name: parameterName
                }

                const cache = session.getItemHash(key)
                if (cache) {
                    this.parameters.push({
                        name: parameterName,
                        label: cache.label,
                        items: cache.items
                    })
                }
                else {
                    api.fetchingParameter(parameterName).then(response => {
                        this.parameters.push({
                            name: parameterName,
                            label: response.data.label,
                            items: response.data.items
                        })

                        session.setItemHash(key, {
                            name: parameterName,
                            label: response.data.label,
                            items: response.data.items
                        })
                    }).catch(() => {
                        console.error('Parameters loading error')
                    })
                }
            })
        },
    },
    created() {
        this.init()
    },
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .product-parameters {
        margin-top: 1.5rem;

        &-item + &-item {
            margin-top: 1rem;
        }
    }

    .product-parameters-title {
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
</style>