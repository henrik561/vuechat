<template>
    <div class="flex justify-center items-center bg-white w-full h-screen text-black">
        <div
            class="bg-gradient-to-br from-blue-800 to-purple-700 rounded-full h-6 mt-5 h/12 w-2/4"
            role="progressbar"
            :aria-valuenow="progressStatus"
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <div
                class="bg-white border-blue-800 border-4 rounded-full h-6 text-center text-sm transition"
                :style="`width: ${progressStatus}%; transition: width 2s;`"
            >
            </div>
        </div>
    </div>
</template>

<script>

import {updateUserOnlineVisibility, useAuth} from "../../server/firebaseChat";
import {mapActions} from "vuex";

export default {
    name: "ChatPreRender",

    data() {
      return {
          progressStatus: 5,
      }
    },

    async created() {
        useAuth().onAuthStateChanged((user) => {
            if(!user) {
                this.progressStatus = 100;
                this.setPageLoadingStatus();
                return;
            }

            this.setCurrentUser({
                "username" : user.displayName,
                "email" : user.email,
                "phoneNumber" : user.phoneNumber,
                "profilePicture" : user.photoURL,
                "uid" : user.uid,
            })

            updateUserOnlineVisibility(user, 'online');

            this.progressStatus = 100;

            setTimeout(() => {
                this.setPageLoadingStatus();
            }, 2000)
        });
    },

    methods: {
        ...mapActions(['setCurrentUser', 'setPageLoadingStatus']),
    }


}
</script>

<style scoped>

</style>