<template>
    <div class="flex justify-between px-6 w-full h-16 border-b-4 border-white items-center">
        <div>
            <div class="w-full flex items-center">
                <div class="flex w-12 h-12">
                    <img class="w-12 h-12 rounded-full object-cover" :src="getNewChatUser.profilePicture ? getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture" />
                </div>
                <div class="ml-4 flex flex-col">
                    <span class="text-xl text-white">{{ getNewChatUser.username || getNewChatUser.email }}</span>
                    <span class="text-sm text-gray-400">{{ getNewChatUser.online_visibility }}</span>
                </div>
            </div>
        </div>
        <div>
            <i class="fas fa-cog text-2xl text-white"></i>
        </div>
    </div>

</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "ChatUserTopBar",

    computed: {
        ...mapGetters(['getNewChatUser']),
    }
}
</script>

<style scoped>

</style>