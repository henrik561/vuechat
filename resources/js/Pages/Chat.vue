<template>
    <div v-if="!getPageIsLoading && getUserIsLoggedIn" class="flex h-full chat-wrapper">
        <ContactSideBar></ContactSideBar>
        <CurrentChat></CurrentChat>
    </div>
    <div v-else class="absolute top-0 left-0 w-screen">
        <AuthLayout>
            <template v-if="getPageIsLoading">
                <ChatPreRender></ChatPreRender>
            </template>
            <template v-else>
                <template v-if="getAuthType">
                    <Login></Login>
                </template>
                <template v-else>
                    <Register></Register>
                </template>
            </template>
        </AuthLayout>
    </div>
</template>

<script>

import ContactSideBar from "../Components/Chat/ContactSideBar";
import CurrentChat from "../Components/Chat/currentChat/CurrentChat";
import AuthLayout from "../Components/Auth/AuthLayout";
import ChatPreRender from "../Components/base/ChatPreRender";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import db from "../server/database";
import {getUserOnlineStatusKey, updateUserOnlineVisibility, getActiveChatKey} from "../server/firebaseChat";
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "Chat",

    components: {Register, Login, ChatPreRender, AuthLayout, CurrentChat, ContactSideBar},

    computed: {
        ...mapGetters(['getUserIsLoggedIn', 'getPageIsLoading', 'getCurrentUser', 'getNewChatUser', 'getAuthType', 'getCurrentChatKey']),
    },

    methods: {
        ...mapActions(['setAllUsers']),

        async leaving(){
            await updateUserOnlineVisibility(this.getCurrentUser, new Date().getTime());
        },

        async getAllChats() {
            await db.database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', async (snapshot) => {
                let users = _.filter(snapshot.val(), member => {
                    return !member.blocked && !member.deleted;
                })
                this.setAllUsers(users)
            })
        }
    },

    watch: {
        getCurrentUser: {
            handler: async function (user) {
                let userKey = await getUserOnlineStatusKey(user)
                await this.getAllChats();
                await db.database().ref(`onlineStatus/${userKey}`).onDisconnect().update({'online_visibility': new Date().getTime()})
            }
        },

        getNewChatUser: {
            handler: async function(user) {
                setTimeout(async () => {
                    let activeChatKey = await getActiveChatKey(this.getCurrentChatKey, this.getCurrentUser.uid);
                    await db.database().ref(`activeChats/${activeChatKey}`).onDisconnect().set(null)
                }, 10)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
    height: calc(100% - 4rem);
}
</style>