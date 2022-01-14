<template class="overflow-y-hidden">
    <div v-if="!getPageIsLoading && getUserIsLoggedIn" class="bg-gradient-to-br from-blue-800 to-purple-700">
        <Navbar></Navbar>

        <div class="flex h-full layout-wrapper">
            <ContactSideBar></ContactSideBar>
            <slot></slot>
        </div>

        <Footer></Footer>
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

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import AuthLayout from "../Components/Auth/AuthLayout";
import ChatPreRender from "../Components/base/ChatPreRender";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import {mapActions, mapGetters} from "vuex";
import {getUserKey} from "../server/firebaseChat";
import db from "../server/database";
import ContactSideBar from "../Components/Chat/ContactSideBar";

export default {
    name: "Layout",
    components: {ContactSideBar, Register, Login, ChatPreRender, AuthLayout, Footer, Navbar},

    computed: {
        ...mapGetters(['getUserIsLoggedIn', 'getPageIsLoading', 'getCurrentUser', 'getAuthType']),
    },

    methods: {
        ...mapActions(['setPendingRequests']),
    },

    watch: {
        getCurrentUser: {
            handler: async function(user) {
                let userKey = await getUserKey(user)
                await db.database().ref(`users/${userKey}`).onDisconnect().update({'online_visibility': new Date().getTime()})
                await db.database().ref('friendRequests').orderByChild('receiver_id').equalTo(this.getCurrentUser.uid).on('value', async snapshot => {
                    if(snapshot.exists()) {
                        this.setPendingRequests(Object.keys(snapshot.val()).length)
                    }else {
                        this.setPendingRequests(0)
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
    .layout-wrapper {
        height: calc(100% - 4rem);
    }
</style>