<template>
    <template v-for="friend in friends" :key="friend.uid">
        <Friend :friend="friend"></Friend>
    </template>
</template>

<script>

import db from "../../../../../server/database";
import {mapGetters} from "vuex";
import Friend from "../Friend";

export default {
    name: "Blocked",
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
            this.friends = _.filter(snapshot.val(), friend => {
                return friend.blocked
            })
        })
    }
}
</script>

<style scoped>

</style>