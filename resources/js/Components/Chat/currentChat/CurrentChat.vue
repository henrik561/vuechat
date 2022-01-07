<template>
    <div v-if="hasNewChat" class="w-3/4 h-full overflow-x-hidden flex relative border-l-2 border-white">
        <div class="w-full" :class="{ 'w-3/4' : userProfileIsToggled }">
            <ChatUserTopBar @handleTopBarClick="toggleUserProfileState"></ChatUserTopBar>
            <div id="message-container" :class="hasNewChat ? 'current-chat-main-section-newchat' : 'current-chat-main-section'" class="w-full justify-start flex overflow-y-auto gap-2 flex-col p-6">
                <template v-for="(message, objectIndex, index) in getCurrentChatMessages">
                    <div class="w-full flex" :class="message.chatter_id === getCurrentUser.uid ? 'justify-end' :  'justify-start'">
                        <div class="p-3 w-max max-w-screen-sm rounded-xl flex gap-2 bg-green-200">
                            <span class="mr-2 w-full break-all">{{ message.message }}</span>
                            <div class="flex gap-1 items-end text-xs mt-3" :class="message.chatter_id === getCurrentUser.uid ? 'justify-end' : 'justify-start'">
                                <div class="message_timestamp">{{ message.timestamp }}</div>
                                <div class="message_status text-xs items-center" v-if="message.chatter_id === getCurrentUser.uid">
                                    <i class="fas fa-check text-gray-400" v-if="false"></i>
                                    <i class="fas fa-check-double text-gray-400" v-if="!message.message_seen"></i>
                                    <i class="fas fa-check-double text-blue-400" v-if="message.message_seen"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <NewMessage @addMessage="sendNewMessageEvent"></NewMessage>
        </div>
        <div class="user-profile-container relative w-1/4" :class="{ 'user-profile-toggled' : userProfileIsToggled }">
            <UserProfile @handleProfileClick="toggleUserProfileState"></UserProfile>
        </div>
    </div>

    <div v-else class="w-3/4 text-white text-xl flex items-center flex-col justify-center current-chat-main-section-no-new-chat">
        <h3>Select a user and start chatting with each other!</h3>
        <span>Having trouble? <Link href="?" class="text-blue-500 hover:underline">Contact Us</Link></span>
    </div>
</template>

<script>

import { Link } from "@inertiajs/inertia-vue3";
import {mapActions, mapGetters} from "vuex";
import NewMessage from "./newMessage";
import {
    sendMessage,
    hasExistingConnection,
    markMessagesAsRead,
    createNewChat,
    getActiveChatKey
} from '../../../server/firebaseChat';
import db from '../../../server/database';
import ChatUserTopBar from "./ChatUserTopBar";
import UserProfile from "./UserProfile/UserProfile";

export default {
    name: "CurrentChat",
    components: {UserProfile, ChatUserTopBar, NewMessage, Link },

    data() {
        return {
            messages: null,
            fetchMessages:false,
            hasChatConnection: false,
            showNewMessageShort: true,
            viewUserProfile: false,
        }
    },

    async created() {
        db.database().ref('messages').on('value', snapshot => {
            this.messages = snapshot.val();
            this.scrollToBottom()
        })
    },

    computed: {
        ...mapGetters(['getNewChatUser', 'getCurrentUser', 'getCurrentChatKey']),

        hasNewChat() {
            setTimeout(async () => {
                await this.scrollToBottom();
            }, 1)
            return !_.isNil(this.getNewChatUser);
        },

        userProfileIsToggled() {
            return this.viewUserProfile;
        },

        getCurrentChatMessages() {
            return _.filter(this.messages, message => {
                if(message.chatKey === this.getCurrentChatKey) {
                    return message;
                }
            })
        }

    },


    methods: {
        ...mapActions(['setChatStop']),

        async sendNewMessageEvent(message) {
            this.hasChatConnection = await hasExistingConnection(this.getCurrentChatKey, this.getCurrentUser.uid, this.getNewChatUser.uid);
            await sendMessage(this.getCurrentUser.uid, this.getCurrentChatKey, message, this.hasChatConnection);
            await this.scrollToBottom();
        },

        toggleUserProfileState() {
            this.viewUserProfile = !this.viewUserProfile;
        },

        async scrollToBottom() {
            let messageContainer = await document.getElementById('message-container');
            if(!messageContainer) {
                return;
            }
            messageContainer.scrollTop = messageContainer.scrollHeight;
        },
    },
}
</script>

<style scoped>
    .current-chat-main-section-newchat {
        height: calc(100vh - 13rem);
    }

    .current-chat-main-section-no-new-chat {
        height: calc(100vh - 4rem);
    }

    .current-chat-main-section {
        height: 100%;
    }

    .user-profile-container {
        transition: .5s ease-in-out;
        width: 0;
        overflow: hidden;
    }

    .user-profile-toggled {
        width: 25%;
    }
</style>