<template>
    <template v-for="friend in friends" :key="friend.uid">
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

    async created() {
        await db.database().ref('friendRequests').orderByChild('receiver_id').equalTo(this.getCurrentUser.uid).on('value', async snapshot => {
            console.log(snapshot.val())
            if(snapshot.exists()) {
                await this.setPendingRequests(Object.keys(snapshot.val()).length)
                this.friends = await snapshot.val();
            }else {
                this.friends = [];
                this.setPendingRequests(0)
            }
        })
    }
}
</script>

<style scoped>

</style>