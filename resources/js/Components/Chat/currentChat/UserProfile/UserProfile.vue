<template>
    <div class="w-full container-max-height flex flex-col justify-start absolute right-0 bg-transparent border-l-2 border-white">
        <div class="relative">
            <div class="absolute right-6 top-3">
                <i @click="handleClick" class="fas fa-times"></i>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <div class="w-48 h-48 mt-16 rounded-full m-0 aspect-square bg-gray-400 ">
                <img class="w-full h-full object-cover rounded-full" :src="getNewChatUser.profilePicture ? getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile"/>
            </div>
        </div>
        <div class="mt-7 text-center">
            <div class="flex flex-col gap-1">
                <span>{{ getNewChatUser.username }}</span>
                <span>{{ getNewChatUser.email }}</span>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "UserProfile",

    computed: {
        ...mapGetters(['getNewChatUser']),
    },

    methods: {
        handleClick() {
            this.$emit('handleProfileClick')
        }
    }

}
</script>

<style scoped>
    .container-max-height {
        height: calc(100vh - 4rem);
    }
</style>