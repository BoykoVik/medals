import './bootstrap'
import { createApp } from "vue";
import initNative from "./native";

// Vue
import Catalog from "./components/catalog/Catalog.vue";

createApp(Catalog, {
    productsApi: $('#catalog').attr('data-api-products')
}).mount('#catalog')


// Native
initNative()