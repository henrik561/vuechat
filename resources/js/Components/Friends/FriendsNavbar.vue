<template>
    <div class="flex px-4 w-full h-12 border-b-2 border-white">
        <div class="my-auto flex gap-4">
            <div class="text-white py-0.5 px-1 rounded">
                <span>Friends |</span>
            </div>
            <div class="flex gap-4">
<!--               // TODO when toggled to a friends list type then to add friend list type still shows (all) + (add friend)-->
                <div @click="typeClickHandler('online')" :class="{ 'bg-green-500' : getFriendsListType === 'online' }" class="cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded">
                    <span>Online</span>
                </div>
                <div @click="typeClickHandler('all')" :class="getFriendsListType === 'all' ? 'bg-white' : 'text-white'" class="cursor-pointer py-0.5 w-20 text-center px-1 rounded">
                    <span>All</span>
                </div>
                <div @click="typeClickHandler('pending')" :class="{ 'bg-yellow-500' : getFriendsListType === 'pending' }" class="relative cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded">
                    <span>Pending</span>
                    <div v-if="getNewPendingRequests" :class="getFriendsListType === 'pending' ? 'bg-white text-yellow-500' : 'bg-yellow-500 text-white' " class="w-4 absolute h-4 top-0 right-0 rounded-full text-xs">{{ getPendingRequests }}</div>
                </div>
                <div @click="typeClickHandler('blocked')" :class="{ 'bg-red-500' : getFriendsListType === 'blocked' }" class="cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded">
                    <span>Blocked</span>
                </div>
                <div @click="addFriendHandler" class="bg-green-500 cursor-pointer w-28 text-center text-white py-0.5 px-1 rounded">
                    <span>Add Friend</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import db from "../../server/database";

export default {
    name: "FriendsNavbar",


    computed: {
      ...mapGetters(['getAddFriends', 'getCurrentUser', 'getFriendsListType', 'getPendingRequests', 'getNewPendingRequests'])
    },

    methods: {
        ...mapActions(['setAddFriends', 'setFriendsListType']),

        typeClickHandler(type) {
            if(this.getAddFriends) {
                this.setAddFriends();
            }

            this.setFriendsListType(type);
        },

        addFriendHandler() {
            this.setFriendsListType(null);
            this.setAddFriends();
        }
    },


}
</script>

<style scoped>

</style>