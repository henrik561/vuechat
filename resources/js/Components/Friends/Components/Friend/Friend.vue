<template>
    <div class="w-full px-4 h-16 flex mb-4 justify-between items-center relative border-t borer-white">
        <div class="flex gap-2">
            <div class="relative">
                <img class="object-cover h-12 border border-gray-300 w-12 rounded-full" width="100" height="100" :src="friendData.profilePicture ? friendData.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture">
            </div>
            <div class="flex flex-col text-white">
                <span>{{ friendData.email }}</span>
                <span>{{ formatUserOnlineVisibility }}</span>
            </div>
        </div>
        <div v-if="getFriendsListType !== 'pending'" class="flex gap-2">
            <div class="w-10 h-10 flex items-center bg-white rounded-full justify-center">
                <NavLink :notNavbarLink="true" href="/chat" @click="setNewChatUser"><i class="fas fa-comment-alt text-purple-800"></i></NavLink>
            </div>
            <div @click="toggleOptionsPopup" class="w-10 h-10 flex items-center bg-white rounded-full justify-center">
                <i class="fas fa-ellipsis-v text-purple-800"></i>
            </div>
        </div>
        <div v-else class="flex gap-2">
            <div @click="acceptFriendRequest" class="w-10 h-10 flex items-center bg-white rounded-full justify-center">
                <i class="fas fa-check text-green-500"></i>
            </div>
            <div @click="rejectFriendRequest" class="w-10 h-10 flex bg-white rounded-full items-center justify-center">
                <i class="fas fa-times text-red-500"></i>
            </div>
        </div>
        <div v-if="usersPopupIsOpen" class="w-auto absolute flex flex-col justify-center gap-3 p-2 h-auto bg-white right-4 top-full w-40 h-24 rounded-2xl z-20">
            <span @click="removeFriend" class="text-yellow-500 cursor-pointer p-2 transition-all duration-300 rounded-2xl hover:bg-yellow-500 hover:text-white">Vriend verwijderen</span>
            <span @click="blockFriend" class="text-red-500 cursor-pointer p-2 transition-all duration-300 rounded-2xl hover:bg-red-500 hover:text-white">Vriend Blokkeren</span>
        </div>
    </div>
</template>

<script>

import {
    getUserData,
    addNewChat,
    getUserOnlineStatus,
    rejectFriendRequest,
    createNewChat, markMessagesAsRead,
    getChatKey,
    removeFriend,
    blockFriend,
} from "../../../../server/firebaseChat";
import moment from "moment";
import {mapActions, mapGetters} from "vuex";
import NavLink from "../../../../Shared/Navbar/NavLink";

export default {
    name: "Friend",
    components: {NavLink},
    props: ['friend'],

    data() {
        return {
            friendData: [],
        }
    },

    computed: {
        ...mapGetters(['getCurrentUser', 'getFriendsListType', 'getCurrentChatKey', 'getFriendPopupUser']),

        usersPopupIsOpen() {
          return this.getFriendPopupUser === this.friendData.uid
        },

        formatUserOnlineVisibility() {
            let userLastSeen = this.friendData.online_visibility

            if(!userLastSeen) {
                return ''
            }else

            if(userLastSeen === 'online') {
                return userLastSeen;
            }else if(moment(userLastSeen).isValid()) {
                return moment(userLastSeen).fromNow();
            }else {
                return '';
            }
        },
    },

    created() {
        this.getFriendsData()
    },

    methods: {
        ...mapActions(['setNewChat', 'setNewChatKey', 'setFriendPopupUser']),

        async getFriendsData() {
            if(this.getFriendsListType === 'pending') {
                this.friendData = await getUserData(this.friend.chatter_id)
            }else {
                this.friendData = await getUserData(this.friend.receiver_id)
            }
            this.friendData['online_visibility'] = await getUserOnlineStatus({ uid: this.friendData.uid })
        },

        async acceptFriendRequest() {
            await addNewChat(this.getCurrentUser.uid, this.friendData.uid);
        },

        async rejectFriendRequest() {
            await rejectFriendRequest(this.getCurrentUser.uid, this.friendData.uid)
        },

        async setNewChatUser(){
            await this.setNewChat(this.friendData);
            let chatKey = await getChatKey(this.getCurrentUser.uid, this.friendData.uid)
            await this.setNewChatKey(chatKey)
            await markMessagesAsRead(this.friendData.uid, chatKey, this.getCurrentUser.uid);
            await createNewChat(this.getCurrentUser.uid, this.friendData.uid, chatKey);
        },

        closePopup() {
            this.setFriendPopupUser(null)
        },

        toggleOptionsPopup() {
            if(this.usersPopupIsOpen) {
                this.closePopup()
            }else {
                this.setFriendPopupUser(this.friendData.uid);
            }
        },

        async removeFriend() {
            await removeFriend(this.getCurrentUser.uid, this.friendData.uid)
            this.closePopup()
        },

        async blockFriend() {
            await blockFriend(this.getCurrentUser.uid, this.getFriendPopupUser)
            this.closePopup()
        }
    },

    watch: {
        friend: {
            handler: function (user) {
                this.getFriendsData();
            }
        }
    }
}
</script>

<style scoped>

</style>