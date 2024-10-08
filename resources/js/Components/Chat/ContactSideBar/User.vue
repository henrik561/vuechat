<template>
    <NavLink :notNavbarLink="true" :href="$page.component !== 'Chat'? '/chat' : ''" @click="startNewChat" class="flex hover:bg-opacity-80 transition-all duration-350 cursor-pointer border-2 border-t-0 border-b-2 border-blue-800 justify-center items-center bg-white" :class="getUserHasChat && getNewChatUser.uid === userData.uid ? 'bg-opacity-30 text-white' : 'text-black'">
        <div class="w-11/12 h-16 flex items-center justify-center gap-2">
            <div class="w-12 relative h-12 flex justify-center items-center">
                <img class="object-cover h-12 border border-gray-300 w-12 rounded-full" width="100" height="100" :src="userData.profilePicture && !user.has_been_blocked ? userData.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture">
            </div>
            <div class="w-64 h-full flex flex-col ml-2 justify-center">
                <span class="text-base">{{ userData.username || userData.email }}</span>
            </div>
            <div class="relative h-full flex items-center">
                <div v-if="hasNewMessages" class="newMessageNotification w-6 h-6 right-1 absolute bg-green-500 rounded-full text-white flex justify-center items-center">
                    <span class="-ml-px">{{ getNewMessageAmount }}</span>
                </div>
            </div>
        </div>
    </NavLink>
</template>

<script>
import {markMessagesAsRead, getUserData, createNewChat} from "../../../server/firebaseChat";
import {mapActions, mapGetters} from "vuex";
import NavLink from "../../../Shared/Navbar/NavLink";
import db from '../../../server/database';
import first from "../../../Functions/Helpers";

export default {
    name: "User",
    components: {NavLink},
    props: ["user"],

    data() {
        return {
            userData: {},
            newMessages: 0,
        }
    },

    computed: {
        ...mapGetters(['getNewChatUser', 'getUserHasChat', 'getCurrentUser']),

        hasNewMessages() {
            return this.newMessages > 0
        },

        getNewMessageAmount() {
            return this.newMessages
        },
    },

    created() {
        this.getUserData();

        db.database().ref('chats').orderByChild('chatKey').equalTo(this.user.chatKey).on('value', snapshot => {
            if(snapshot.exists()) {
                _.forEach(snapshot.val(), chat => {
                    if(chat.chatter_id === this.user.receiver_id) {
                        this.newMessages = chat.newMessages;
                    }
                })
            }
        })
    },

    methods: {
        ...mapActions(['setNewChat', 'setNewChatKey']),
        async startNewChat() {
            if(this.getNewChatUser && this.getNewChatUser.uid === this.user.receiver_id) {
                return
            }
            await this.setNewChat(this.userData);
            await this.setNewChatKey(this.user.chatKey)
            await createNewChat(this.getCurrentUser.uid, this.userData.uid, this.user.chatKey);
            await markMessagesAsRead(this.userData.uid, this.user.chatKey, this.getCurrentUser.uid);
        },

        async getUserData() {
            this.userData = await getUserData(this.user.receiver_id)
        }
    },

    watch: {
        user: function(user) {
            this.getUserData()
        }
    }
}
</script>