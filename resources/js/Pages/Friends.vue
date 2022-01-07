<template>
        <FriendsComponent></FriendsComponent>
</template>
<script>

import ContactSideBar from "../Components/Chat/ContactSideBar";
import CurrentChat from "../Components/Chat/currentChat/CurrentChat";
import FriendsComponent from "../Components/Friends/Friends";
import {mapGetters} from 'vuex';

export default {
    name: "Friends",

    components: {CurrentChat, ContactSideBar, FriendsComponent},

    computed: {
        ...mapGetters([]),
    },
}
</script>

<style scoped>
</style>