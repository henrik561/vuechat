<template>
    <CurrentChat></CurrentChat>
</template>

<script>

import ContactSideBar from "../Components/Chat/ContactSideBar";
import CurrentChat from "../Components/Chat/currentChat/CurrentChat";
import db from "../server/database";
import {getActiveChatKey, markMessagesAsRead} from "../server/firebaseChat";
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "Chat",

    components: {CurrentChat, ContactSideBar},

    computed: {
        ...mapGetters(['getCurrentUser', 'getNewChatUser', 'getCurrentChatKey']),
    },

    methods: {
        ...mapActions(['setAllUsers', 'setActiveChatKey']),
    },

    watch: {
        getNewChatUser: {
            handler: async function(user) {
                setTimeout(async () => {
                    let activeChatKey = await getActiveChatKey(this.getCurrentChatKey, this.getCurrentUser.uid)
                    this.setActiveChatKey(activeChatKey)
                    await db.database().ref(`activeChats/${activeChatKey}`).onDisconnect().set(null)
                }, 10)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>