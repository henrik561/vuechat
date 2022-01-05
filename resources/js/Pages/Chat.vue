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
import {getUserKey, updateUserOnlineVisibility} from "../server/firebaseChat";
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "Chat",

    components: {Register, Login, ChatPreRender, AuthLayout, CurrentChat, ContactSideBar},

    computed: {
        ...mapGetters(['getUserIsLoggedIn', 'getPageIsLoading', 'getCurrentUser', 'getAuthType']),
    },

    async mounted() {
        let self = this;
        window.onbeforeunload = function(e){
            self.leaving();
        };
    },

    async created() {

        await db.database().ref('users').on("value", snapshot => {
            this.setAllUsers(snapshot.val());
        })

        if(this.userIsLoggedIn) {
            await db.database().ref('onlineStatus/' + await getUserKey(this.getCurrentUser().uid)).onDisconnect().set(new Date().getTime())
        }

        await db.database().ref('onlineStatus').on('value', (snapshot) => {
            // console.log(snapshot.val());
        })
    },

    methods: {
        ...mapActions(['setAllUsers']),

        leaving(){
            updateUserOnlineVisibility(this.getCurrentUser(), new Date().getTime());
        }
    },
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
    height: calc(100% - 4rem);
}
</style>