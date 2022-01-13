<template>
    <div class="flex justify-between px-6 w-full h-16 border-b-4 border-white items-center">
        <div>
            <div class="w-full flex items-center">
                <div class="flex w-12 h-12">
                    <img class="w-12 h-12 rounded-full object-cover" :src="getNewChatUser.profilePicture && !userIsBlocked ? getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture" />
                </div>
                <div class="ml-4 flex flex-col">
                    <span class="text-xl text-white">{{ getNewChatUser.username || getNewChatUser.email }}</span>
                    <span v-if="!userIsBlocked" class="text-sm text-gray-400">{{ formatUserOnlineVisibility }}</span>
                </div>
            </div>
        </div>
        <div @click="handleClick">
            <i class="fas fa-cog text-2xl text-white"></i>
        </div>
    </div>

</template>

<script>

import {mapGetters} from "vuex";
import moment from 'moment';
import db from "../../../server/database";
import {first} from "../../../Functions/Helpers";
import {userIsBlocked} from "../../../server/firebaseChat";

export default {
    name: "ChatUserTopBar",

    data() {
        return {
            userStatus: '',
            userIsBlocked: false,
        }
    },

    computed: {
        ...mapGetters(['getNewChatUser', 'getNewChatKey', 'getCurrentUser']),

        formatUserOnlineVisibility() {
            if(this.userIsBlocked) {
                return;
            }

            let userLastSeen = this.userStatus

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
        db.database().ref('users').orderByChild('uid').equalTo(this.getNewChatUser.uid).on('value', async snapshot => {
            this.userStatus = first(snapshot.val()).online_visibility
        })

        db.database().ref('chats').orderByChild('chatKey').equalTo(this.getNewChatKey).on('value', snapshot => {
            _.forEach(snapshot.val(), chat => {
                if(chat.chatter_id === this.getCurrentUser.uid && chat.receiver_id === this.getNewChatUser.uid) {
                    this.userIsBlocked = chat.has_been_blocked || false;
                }
            })
        })
    },

    methods: {
        handleClick() {
            this.$emit('handleTopBarClick')
        }
    },

    watch: {
        getNewChatUser: {
            handler: function(user) {
                this.userStatus = user.online_visibility
            }
        }
    }
}
</script>

<style scoped>

</style>