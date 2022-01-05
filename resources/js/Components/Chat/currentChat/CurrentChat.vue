<template>
    <div v-if="hasNewChat" class="w-3/4 h-full border-l-2 border-white">
        <ChatUserTopBar></ChatUserTopBar>
        <div id="message-container" :class="hasNewChat ? 'current-chat-main-section-newchat' : 'current-chat-main-section'" class="w-full justify-start flex overflow-y-auto gap-2 flex-col p-6">
            <template v-for="(message, objectIndex, index) in messages">
                <div v-if="(message.sender_id === getNewChatUser.uid) && (message.receiver_id === getCurrentUser.uid) || (message.receiver_id === getNewChatUser.uid) && (message.sender_id === getCurrentUser.uid)">
                    <div class="w-full flex" :class="message.receiver_id === getCurrentUser.uid ? 'justify-end' :  'justify-start'">
                        <div class="p-3 w-max max-w-screen-sm rounded-xl flex gap-2 bg-green-200">
                            <span class="mr-2 w-full break-all">{{ message.message }}</span>
                            <div class="flex gap-1 items-end text-xs mt-3" :class="messages.receiver_id === getCurrentUser.uid ? 'justify-start' : 'justify-end'">
                                <div class="message_timestamp">{{ message.timestamp }}</div>
                                <div class="message_status text-xs items-center" v-if="message.receiver_id === getCurrentUser.uid">
                                    <i class="fas fa-check text-gray-400" v-if="false"></i>
                                    <i class="fas fa-check-double text-gray-400" v-if="!message.message_seen"></i>
                                    <i class="fas fa-check-double text-blue-400" v-if="message.message_seen"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <NewMessage @addMessage="sendNewMessageEvent"></NewMessage>
    </div>

    <div v-else class="w-full text-white text-xl flex items-center flex-col justify-center current-chat-main-section-no-new-chat">
        <h3>Select a user and start chatting with each other!</h3>
        <span>Having trouble? <Link href="?" class="text-blue-500 hover:underline">Contact Us</Link></span>
    </div>
</template>

<script>

import { Link } from "@inertiajs/inertia-vue3";
import {mapActions, mapGetters} from "vuex";
import NewMessage from "./newMessage";
import {sendMessage, startNewChat, hasChat, markMessagesAsRead} from '../../../server/firebaseChat';
import db from '../../../server/database';
import ChatUserTopBar from "./ChatUserTopBar";

export default {
    name: "CurrentChat",
    components: {ChatUserTopBar, NewMessage, Link },

    data() {
        return {
            messages: null,
            fetchMessages:false,
            hasChatConnection: false,
            showNewMessageShort: true,
        }
    },

    async created() {
        const messageEvent = db.database().ref('messages');
        messageEvent.on('value', snapshot => {
            this.messages = snapshot.val();
            this.scrollToBottom()
        })
    },

    computed: {
        ...mapGetters(['getNewChatUser', 'getCurrentUser']),

        hasNewChat() {
            setTimeout(async () => {
                await this.scrollToBottom();
                if(this.getNewChatUser) {
                    await startNewChat(this.getCurrentUser.uid, this.getNewChatUser.uid)
                    await markMessagesAsRead(this.getCurrentUser.uid, this.getNewChatUser.uid)
                }
            }, 1)
            return !_.isNil(this.getNewChatUser);
        },
    },

    unmounted() {
        this.setChatStop();
    },

    methods: {
        ...mapActions(['setChatStop']),

        async sendNewMessageEvent(message) {
            this.hasChatConnection = await hasChat(this.getNewChatUser.uid, this.getCurrentUser.uid);
            await sendMessage(this.getNewChatUser.uid, this.getCurrentUser.uid, 1, message, this.hasChatConnection);
            await this.scrollToBottom();
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
</style>