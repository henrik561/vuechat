<template>
    <div class="w-full h-full p-4">
        <div class="mb-3">
            <h1 class="text-white font-bold text-xl">Create a group chat</h1>
        </div>
        <div class="w-full flex flex-col gap-3 h-12">
            <input @focus="group.createError = false" v-model="group.groupName" name="group-name" class="px-4 py-2 rounded-3xl" placeholder="Group name...">
            <input @focus="group.createError = false" v-model="group.groupDescription" name="group-description" class="px-4 py-2 rounded-3xl" placeholder="Group description...">
            <div v-if="group.createError" class="px-4 py-2 rounded-3xl bg-red-500 text-white">Please fill in every field!</div>
            <button @click.prevent="createGroup" :class="canCreate ? 'bg-green-500 cursor-disabled' : 'bg-green-300 cursor-pointer'" class="px-4 py-2 rounded-3xl text-white">Create group</button>
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";
import {createGroup} from "../../../server/firebaseChat";

export default {
    name: "Groupchat",

    data() {
        return {
            group: {
                groupName: '',
                groupDescription: '',
                createError: false,
            }
        }
    },

    computed: {
        ...mapGetters(['getCurrentUser']),

        canCreate() {
          return this.group.groupName.length > 0 && this.group.groupDescription.length > 0
        },
    },

    methods: {
        async createGroup() {
            if(!this.canCreate) {
                return this.group.createError = true;
            }

            await createGroup(this.getCurrentUser.uid, this.group.groupName, this.group.groupDescription, 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg')

            this.$emit('toggleGroupChatPopup');
        }
    }
}
</script>

<style scoped>

</style>