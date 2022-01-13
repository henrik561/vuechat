<template>
    <div class="w-1/4 border-r-2 border-white relative bg-transparent max-viewport-height flex flex-col contact-sidebar">
        <div v-if="!createGroupChat" class="flex flex-col w-full border-2 border-blue-800">
            <Search @searchInUsers="searchInUsers"></Search>
        </div>
        <perfect-scrollbar v-if="!createGroupChat" class="overflow-y-scroll w-full">
            <template v-for="chat in getAllUsers" :key="chat.uid">
                <template v-if="chat.members">
                    <Group :group="chat"></Group>
                </template>
                <template v-else>
                    <User :user="chat"></User>
                </template>
            </template>
            <div class="flex w-full min-h-full py-6 justify-center items-center" v-if="!hasUsers">
                <span class="text-white">Geen contacten gevonden!</span>
            </div>
        </perfect-scrollbar>
        <div @click="toggleCreateChat" class="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white bg-green-500 absolute bottom-4 right-4">
            <i class="fas fa-comment-medical text-white text-3xl transition-all duration-300 hover:text-green-500"></i>
        </div>
        <template v-if="createGroupChat">
            <Groupchat @toggleGroupChatPopup="toggleCreateChat"></Groupchat>
        </template>
    </div>
</template>

<script>

import User from "./ContactSideBar/User";
import Search from "./ContactSideBar/Search";
import {mapActions, mapGetters} from "vuex";
import db from "../../server/database";
import Groupchat from "./Groupchat/Groupchat";
import Group from "./ContactSideBar/Group";

export default {
    name: "ContactSideBar",
    components: {Group, Groupchat, Search, User},

    data() {
        return {
            filterWord: '',
            users: [],
            createGroupChat: false,
        }
    },

    computed: {
        ...mapGetters(['getAllUsers', 'getCurrentUser']),

        hasUsers() {
            return !_.isEmpty(this.getAllUsers);
        },

    },

    async created() {
        await db.database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', async (snapshot) => {
            this.setAllUsers(_.filter(snapshot.val(), user => !user.blocked))
        })

        await db.database().ref('groups').on('value', snapshot => {
            if(snapshot.exists()) {
                _.forEach(snapshot.val(), chat => {
                    if(chat.members.includes(this.getCurrentUser.uid)) {
                        const i = this.getAllUsers.findIndex(_element => _element.chatKey === chat.chatKey);
                        console.log(i)
                        if (i > -1) {
                            this.setOneUserByKey({user: chat, key: i})
                        } else {
                            this.setOneUser(chat)
                        }
                    }
                })
            }
        })
    },

    methods: {
        ...mapActions(['setAllUsers', 'setOneUserByKey', 'setOneUser']),

        searchInUsers(keyword) {
            this.filterWord = keyword;
        },

        toggleCreateChat() {
            this.createGroupChat = !this.createGroupChat;
        }
    },

    watch: {
        friends: {
            handler: function (friends) {
            }
        }
    }


}
</script>

<style scoped>

    .max-viewport-height {
        height: calc(100vh - 4rem);
    }

</style>