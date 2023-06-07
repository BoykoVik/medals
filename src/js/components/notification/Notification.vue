<template>
    <transition name="notification-fade">
        <div v-if="isShow"
            class="notify">
            {{ message }}
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Notification',
    computed: {
        ...mapGetters('Notification', ['isShow', 'message'])
    }
}
</script>

<style scoped lang="scss">
    @import "../../../style/sys/vars";
    @import "../../../style/sys/mixins";

    .notify {
        z-index: 1001;
        position: absolute;
        top: 83px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background-color: rgba(0, 0, 0, 0.68);
        border-radius: $border-radius;
        color: $white;
        text-align: center;
    }

    .notification-fade-enter-active, .notification-fade-leave-active {
        transition: opacity .5s;
    }
    .notification-fade-enter, .notification-fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>