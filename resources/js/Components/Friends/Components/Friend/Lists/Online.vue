<template>
    <template v-for="friend in friends">
        <Friend :friend="friend"></Friend>
    </template>
</template>

<script>

import db from "../../../../../server/database";
import {getUserOnlineStatus} from "../../../../../server/firebaseChat";
import {mapGetters} from "vuex";
import Friend from "../Friend";

export default {
    name: "Online",
    components: {Friend},
    data() {
        return {
            friends: [],
        }
    },

    computed: {
        ...mapGetters(['getCurrentUser']),
    },

    created() {
        db.database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', async snapshot => {
            this.friends = _.filter(snapshot.val(), async user => {
                return await getUserOnlineStatus({ uid: user.receiver_id }) === 'online' && !user.blocked
            })
        })
    }
}
</script>

<style scoped>

</style>