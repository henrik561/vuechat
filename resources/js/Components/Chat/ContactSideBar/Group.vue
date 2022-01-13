<template>
    <NavLink :notNavbarLink="true" :href="$page.component !== 'Chat'? '/chat' : ''" class="flex hover:bg-opacity-80 transition-all duration-350 cursor-pointer border-2 border-t-0 border-b-2 border-blue-800 justify-center items-center bg-white">
        <div class="w-11/12 h-16 flex items-center justify-center gap-2">
            <div class="w-12 relative h-12 flex justify-center items-center">
                <img class="object-cover h-12 border border-gray-300 w-12 rounded-full" width="100" height="100" :src="group.profilePicture ? group.profilePicture : '/Uploads/Profiles/profile.jpeg'" alt="user profile picture">
            </div>
            <div class="w-64 h-full flex flex-col ml-2 justify-center">
                <span class="text-base">{{ group.groupName }}</span>
            </div>
<!--            <div class="relative h-full flex items-center">-->
<!--                <div v-if="hasNewMessages" class="newMessageNotification w-6 h-6 right-1 absolute bg-green-500 rounded-full text-white flex justify-center items-center">-->
<!--                    <span class="-ml-px">{{ getNewMessageAmount }}</span>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </NavLink>
</template>

<script>

import NavLink from "../../../Shared/Navbar/NavLink";

export default {
    name: "Group",
    props: ['group'],
    components: {NavLink},


}
</script>

<style scoped>

</style>