<template>
    <div class="w-full px-4 h-16 flex mb-4 justify-between items-center border-t borer-white">
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
            <div class="w-10 h-10 flex items-center bg-white rounded-full justify-center">
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
        ...mapGetters(['getCurrentUser', 'getFriendsListType', 'getCurrentChatKey']),

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

    async created() {
        if(this.getFriendsListType === 'pending') {
            this.friendData = await getUserData(this.friend.chatter_id)
        }else {
            this.friendData = await getUserData(this.friend.receiver_id)

        }
        this.friendData['online_visibility'] = await getUserOnlineStatus({ uid: this.friendData.uid })
        //getchat key for this user and set the chatkey instantly
        //
    },

    methods: {
        ...mapActions(['setNewChat', 'setNewChatKey']),

        async acceptFriendRequest() {
            await addNewChat(this.getCurrentUser.uid, this.friendData.uid);
        },

        async rejectFriendRequest() {
            await rejectFriendRequest(this.getCurrentUser.uid, this.friendData.uid)
        },

        async setNewChatUser(){
            await this.setNewChat({
                ...this.friendData,
                'online_visibility' : await getUserOnlineStatus(this.friendData)
            });
            let chatKey = await getChatKey(this.getCurrentUser.uid, this.friendData.uid)
            await this.setNewChatKey(chatKey)
            await markMessagesAsRead(this.friendData.uid, chatKey, this.getCurrentUser.uid);
            await createNewChat(this.getCurrentUser.uid, this.friendData.uid, chatKey);
        },
    }
}
</script>

<style scoped>

</style>