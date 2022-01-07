<template>
    <template v-for="friend in friends">
        <Friend :friend="friend"></Friend>
    </template>
</template>

<script>
import db from "../../../../../server/database";
import {mapActions, mapGetters} from "vuex";
import Friend from "../Friend";

export default {
    name: "Pending",
    components: {Friend},
    data() {
        return {
            friends: [],
        }
    },

    computed: {
        ...mapGetters(['getCurrentUser']),
    },

    methods: {
        ...mapActions(['setPendingRequests']),
    },

    created() {
        db.database().ref('friendRequests').orderByChild('receiver_id').equalTo(this.getCurrentUser.uid).on('value', async snapshot => {
            if(snapshot.exists()) {
                this.setPendingRequests(Object.keys(snapshot.val()).length)
                this.friends = snapshot.val();
            }
        })
    }
}
</script>

<style scoped>

</style>