<template>
    <nav class="h-16 w-full bg-transparent flex justify-between items-center border-b-4 border-white">
        <div class="ml-4 font-bold text-white">
            <span id="logo-text">VueChat.ef2</span>
        </div>
        <div class="flex mr-6">
            <NavLink href="/chat" :active="$page.component === 'Chat'">Chat</NavLink>
            <NavLink href="/friends" :active="$page.component === 'Friends'">
                <span>Friends</span>
                <div v-if="getNewPendingRequests" class="w-4 absolute h-4 bg-yellow-500 top-1 flex items-center justify-center right-9 rounded-full text-xs">{{ getPendingRequests }}</div>
            </NavLink>
<!--            <NavLink href="/logout" method="post" as="button">Logout</NavLink>-->
        </div>
    </nav>
</template>

<script>
import NavLink from "./NavLink";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Navbar",
    components: {NavLink},
    props: ['userIsLoggedIn'],

    computed: {
        ...mapGetters(['getPendingRequests', 'getNewPendingRequests']),
    },
}
</script>