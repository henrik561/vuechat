<template>
    <div class="flex justify-between px-6 w-full h-16 border-b-4 border-white items-center">
        <div>
            <div class="w-full flex items-center">
                <div class="flex w-12 h-12">
                    <img class="w-12 h-12 rounded-full object-cover" :src="getNewChatUser.profilePicture ? getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture" />
                </div>
                <div class="ml-4 flex flex-col">
                    <span class="text-xl text-white">{{ getNewChatUser.username || getNewChatUser.email }}</span>
                    <span class="text-sm text-gray-400">{{ formatUserOnlineVisibility }}</span>
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
import first from "../../../Functions/Helpers";

export default {
    name: "ChatUserTopBar",

    data() {
        return {
            userStatus: ''
        }
    },

    computed: {
        ...mapGetters(['getNewChatUser']),

        formatUserOnlineVisibility() {
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
        db.database().ref('users').orderByChild('uid').equalTo(this.getNewChatUser.uid).on('value', snapshot => {
            this.userStatus = first(snapshot.val()).online_visibility
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