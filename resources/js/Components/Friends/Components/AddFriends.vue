<template>
    <div class="w-full flex flex-col gap-2 border-t rounded border-blue-800 relative">
        <div class="flex flex-col text-white">
            <h1 class="text-xl font-bold">Add Friend</h1>
            <span>You can add a friend with their email address. It's cAsE sEnSitIvE!</span>
        </div>
        <form @submit.prevent="" action="" class="w-full h-16 bg-white rounded flex">
            <input id="friendEmail" v-model="friendEmail" class="pl-2 rounded w-9/12 outline-none border-none" type="text" placeholder="Enter a Email@email.example" />
            <div @click="findFriend" class="bg-white cursor-pointer w-3/12 h-full flex pr-4 justify-end items-center">
                <button :class="canSubmitFriendRequest ? 'bg-blue-800' : 'bg-blue-300'" type="submit" class="text-white rounded px-4 p-2">Send Friend Request</button>
            </div>
        </form>
        <div v-if="addFriend.error" class="w-full flex rounded justify-between items-center h-12 text-white px-4" :class="addFriend.color">
            <span>{{addFriend.error}}</span>
            <i @click="addFriend.error=null" class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import {addAsFriend, addNewChat, getUserByEmail} from "../../../server/firebaseChat";

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
        },

        canSubmitFriendRequest() {
            const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            return this.friendEmail.match(regex)
        }
    },

    methods: {
        ...mapActions(['setAddFriendsPopupState']),

        async findFriend() {

            const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(!this.friendEmail.match(regex)) {
                return this.addFriend.error = 'The email address is not valid!'
            }

            let response = await getUserByEmail(this.friendEmail)
            this.friendEmail = ''
            if(response === 'DoesNotExists') {
                this.addFriend.color = 'bg-red-500'
                return this.addFriend.error = 'The user does not exists!'
            }

            response = await addAsFriend(this.getCurrentUser.uid, response)

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
                },5000)
            }
        }
    }
}
</script>

<style scoped>

</style>