<template>
    <div class="w-full h-12 flex border-t border-blue-800 relative">
        <input v-model="friendEmail" class="pl-2 w-full outline-none border-none" type="text" name="searchKeyWord" id="searchKeyWord" placeholder="Vriend toevoegen..." />
        <div @click="findFriend" class="bg-white w-12 h-full flex justify-center items-center absolute right-0 top-0">
            <i class="fas fa-user-plus"></i>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import {getUserByEmail} from "../../../server/firebaseChat";

export default {
    name: "AddFriends",

    data() {
        return {
            friendEmail: ''
        }
    },

    computed: {
        ...mapGetters(['getAddFriendsPopupState', 'getCurrentUser']),
    },

    methods: {
        ...mapActions(['setAddFriendsPopupState']),

        async findFriend() {
            let response = await getUserByEmail(this.friendEmail)
        }
    },
}
</script>

<style scoped>

</style>