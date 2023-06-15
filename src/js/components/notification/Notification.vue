<template>
    <transition name="notification-fade">
        <div v-if="isShow && type === 'default'"
            class="notify">
            {{ message }}
        </div>
        <div v-if="isShow && type === 'light'"
             class="notify-light">
            {{ message }}
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Notification',
    computed: {
        ...mapGetters('Notification', ['isShow', 'message', 'type'])
    },
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .notify {
        z-index: 1003;
        position: fixed;
        top: 83px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background-color: rgba(0, 0, 0, 0.68);
        border-radius: $border-radius;
        color: $white;
        text-align: center;
    }

    .notify-light {
        z-index: 1003;
        position: fixed;
        top: 83px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background-color: $white;
        border-radius: $border-radius;
        color: $text;
        text-align: center;

        @include shadow;
    }

    .notification-fade-enter-active, .notification-fade-leave-active {
        transition: opacity .5s;
    }
    .notification-fade-enter, .notification-fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>