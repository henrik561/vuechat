<template>
    <template v-for="friend in friends">
        <Friend :friend="friend"></Friend>
    </template>
</template>

<script>
import db from "../../../../../server/database";
import {mapGetters} from "vuex";
import Friend from "../Friend";

export default {
    name: "All",
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
            this.friends = snapshot.val();
        })
    }
}
</script>

<style scoped>

</style>