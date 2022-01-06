<template>
    <div class="w-full h-12 flex border-t border-blue-800 relative">
        <input v-model="friendEmail" class="pl-2 w-full outline-none border-none" type="text" name="searchKeyWord" id="searchKeyWord" placeholder="Vriend toevoegen..." />
        <div @click="findFriend" class="bg-white w-12 h-full flex justify-center items-center absolute right-0 top-0">
            <i class="fas fa-user-plus"></i>
        </div>
    </div>
    <div v-if="addFriend.error" :class="addFriend.color" class="w-full relative border-t-2 border-blue-800 h-12 flex justify-start pl-2 items-center">
        {{addFriend.error}}
        <div @click="addFriend.error = null" class="absolute w-12 right-0 h-full items-center flex justify-center">
            <i class="fas fa-times text-white"></i>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import {addNewChat, getUserByEmail} from "../../../server/firebaseChat";

export default {
    name: "AddFriends",

    data() {
        return {
            friendEmail: '',
            addFriend: {
                error: '',
                color: 'bg-red-500'
            }
        }
    },

    computed: {
        ...mapGetters(['getAddFriendsPopupState', 'getCurrentUser']),

        addFriendError() {
            return this.addFriend.error
        }
    },

    methods: {
        ...mapActions(['setAddFriendsPopupState']),

        async findFriend() {

            const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(!this.friendEmail.match(regex)) {
                return this.addFriend.error = 'The email address is not valid!'
            }

            let response = await getUserByEmail(this.friendEmail, this.getCurrentUser.uid)
            this.friendEmail = ''
            if(response === 'DoesNotExists') {
                this.addFriend.color = 'bg-red-500'
                return this.addFriend.error = 'The user does not exists!'
            }

            response = await addNewChat(this.getCurrentUser.uid, response)

            if(response === 'AddedAsFriend') {
                this.addFriend.color = 'bg-green-500'
                return this.addFriend.error = 'Successfully added as friend!';
            }else {
                this.addFriend.color = 'bg-red-500'
                return this.addFriend.error = 'U are already friends with this user!'
            }
        }
    },

    watch: {
        addFriendError: {
            handler: function (error) {
                setTimeout(() => {
                    this.addFriend.error = null;
                },2500)
            }
        }
    }
}
</script>

<style scoped>

</style>