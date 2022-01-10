<template>
    <div class="flex flex-col w-full">
        <FriendsNavbar></FriendsNavbar>
        <div class="py-4 px-8">
            <div v-if="getAddFriends">
                <AddFriends></AddFriends>
            </div>
            <div v-else>
                <All v-if="getFriendsListType === 'all'"></All>
                <Online v-if="getFriendsListType === 'online'"></Online>
                <Pending v-if="getFriendsListType === 'pending'"></Pending>
                <Blocked v-if="getFriendsListType === 'blocked'"></Blocked>
            </div>
        </div>
    </div>
</template>
<script>

import ContactSideBar from "../Components/Chat/ContactSideBar";
import CurrentChat from "../Components/Chat/currentChat/CurrentChat";
import FriendsNavbar from "../Components/Friends/FriendsNavbar";
import AddFriends from "../Components/Friends/Components/AddFriends";
import Friend from "../Components/Friends/Components/Friend/Friend";
import All from "../Components/Friends/Components/Friend/Lists/All";
import Online from "../Components/Friends/Components/Friend/Lists/Online";
import Pending from "../Components/Friends/Components/Friend/Lists/Pending";
import Blocked from "../Components/Friends/Components/Friend/Lists/Blocked";

import {mapActions, mapGetters} from 'vuex';
import {stopActiveChat} from "../server/firebaseChat";

export default {
    name: "Friends",

    components: {Blocked, Pending, Online, All, Friend, AddFriends, CurrentChat, ContactSideBar, FriendsNavbar},


    computed: {
        ...mapGetters(['getAddFriends', 'getFriendsListType', 'getCurrentUser']),
    },

    async created() {
        //Database chat data
        await stopActiveChat(this.getCurrentUser.uid);

        //Local chat data
        await this.setChatStop();
    },

    methods: {
        ...mapActions(['setFriendsListType', 'setChatStop']),
    },
}
</script>

<style scoped>
</style>