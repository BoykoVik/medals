<template>
    <div>
        <a class="catalog-item"
           v-bind:key="this.id"
           :href="this.url"
        >
            <img class="catalog-item-img" :src="this.image" alt="">
            <h3 class="catalog-item-title">{{ this.name }}</h3>
            <div class="catalog-item-section">
                <p>{{ this.sectionName }}</p>
            </div>

            <div class="catalog-item-actions">
                <p class="catalog-item-price">{{ this.price }} ₽</p>
                <button @click.prevent="pushToCart"
                        class="catalog-item-cart"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                    В корзину
                </button>
            </div>
        </a>

        <base-modal :show="isShow"
                    @hide="isShow = false"
        >
            <base-button :style-type="'transparent'"
                         class="catalog-item-modal-btn-close"
            >
                <i class="fa-solid fa-xmark"></i>
            </base-button>
            <product :id="this.id"
                     :name="this.name"
                     :params="this.parameters"
                     @pushedToCart="pushedToCart"
            ></product>
        </base-modal>
    </div>

</template>

<script>
import {mapActions} from "vuex";
import BaseModal from "../ui/BaseModal.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
    name: 'CatalogItem',
    components: {BaseButton, BaseModal},
    data() {
        return {
            isShow: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        sectionName: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        parameters: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapActions('Cart', ['pushProduct']),
        ...mapActions('Notification', ['pushNotification']),

        pushToCart() {
            if (this.parameters.length) {
                this.isShow = true
            }

            this.pushNotification('Товар добавлен в корзину')
        },

        pushedToCart() {
            this.isShow = false
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    // карточка товара
    .catalog-item {
        width: 100%;
        padding: 1rem;
        border: none;
        background-color: $white;
        border-radius: $border-radius;

        @include shadow;
        @include transition;

        display: grid;
        grid-template-areas:
                "img"
                "img"
                "title"
                "section"
                "actions";

        &:hover {
            cursor: pointer;
            @include shadow-primary;
        }

        // картинка
        &-img {
            grid-area: img;
            border-radius: $border-radius;

            height: 250px;
            object-position: center;
            object-fit: cover;
            width: 100%;
        }

        // название
        &-title {
            grid-area: title;
            font-weight: 500;
            margin-top: 1rem;
            color: $text;

            @include transition;

            &:hover {
                color: $primary;
            }
        }

        // раздел
        &-section {
            grid-area: section;
            margin-top: 0.7rem;
            margin-bottom: 2rem;

            p {
                display: inline;
                font-weight: 400;
                padding: 0.3rem 0.6rem;
                color: #7e7d7d;
                font-size: 12px;
                background-color: #eaeaea;
                border-radius: 20px;
            }
        }

        // цена
        &-price {
            color: $primary;
            font-weight: 500;
            margin-bottom: 0;
        }

        // действия
        &-actions {
            grid-area: actions;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px 0;
        }

        // кнопка добавить в корзину
        &-cart {
            padding: 0.3rem 1rem;
            background-color: $primary;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: $border-radius;
            color: $white;
            outline: none;
            width: 100%;

            @include transition;

            &:hover {
                background-color: darken($primary, 10%);
            }
        }
    }

    .catalog-item-modal {
        padding-top: 100px;
    }

    .catalog-item-modal-btn-close {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>