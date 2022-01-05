<template>
    <div @click="startNewChat" class="flex justify-center items-center" :class="userIsSelected && hasChatWithUser.uid === user.uid ? 'border-b border-t border-r-2 border-white bg-transparant text-white' : 'border-b border-t border-blue-800 bg-white text-black'">
        <div class="w-11/12 h-16 flex items-center justify-center gap-2">
            <div class="w-12 relative h-12 flex justify-center items-center">
                <img class="object-cover h-12 w-12 rounded-full" width="100" height="100" :src="user.profilePicture ? user.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture">
            </div>
            <div class="w-64 h-full flex flex-col ml-2 justify-center">
                <span class="text-base">{{ user.username || user.email }}</span>
            </div>
            <div class="relative h-full flex items-center">
                <div v-if="hasNewMessages" class="newMessageNotification w-6 h-6 absolute bg-green-500 rounded-full text-white flex justify-center items-center">
                    <span class="-ml-px">{{ getNewMessageAmount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getUserOnlineStatus, markMessagesAsRead} from "../../../server/firebaseChat";
import {mapActions} from "vuex";

export default {
    name: "User",
    props: ["user"],

    data() {
        return {
            userStatus: 'online'
        }
    },

    computed: {
        hasNewMessages() {
            return Math.round(Math.random()) > 0;
        },

        getNewMessageAmount() {
            return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        },

        hasChatWithUser() {
            return this.$store.state.newChatUser;
        },

        userIsSelected() {
            return this.$store.state.newChatUser !== null;
        }
    },

    methods: {
        ...mapActions(['setCurrentUser', 'setNewChat']),

        async startNewChat() {
            console.log(this.user);
            console.log(await getUserOnlineStatus(this.user))
            this.setNewChat({
                ...this.user
            });
            await markMessagesAsRead(this.$store.state.currentUser.uid, this.user.uid);
        }
    }
}
</script>