<template>
    <template v-for="friend in friends" :key="friend.uid">
        <Friend :friend="friend"></Friend>
    </template>
</template>

<script>
import db from "../../../../../server/database";
import {mapGetters} from "vuex";
import Friend from "../Friend";
import first from "../../../../../Functions/Helpers";

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

    async created() {
        db.database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', async snapshot => {
            this.friends = [];
            let requests = _.map(snapshot.val(),(user) => {
                return new Promise(async (resolve) => {
                    db.database().ref('users').orderByChild('uid').equalTo(user.receiver_id).on('value',  snapshot => {
                        if(snapshot.exists()) {
                            let userData = first(snapshot.val());
                            if (!_.isEmpty(this.friends)) {
                                _.forEach(this.friends, async (friend, key) => {
                                    if (friend.receiver_id === user.receiver_id) {
                                        this.friends = _.filter(this.friends, friend => friend.receiver_id !== user.receiver_id)
                                    }
                                })
                            }
                            this.friends.push({...user, 'online_visibility': userData.online_visibility})
                        }
                        resolve()
                    })
                });
            })
            await Promise.all(requests)
        });
    }
}
</script>

<style scoped>

</style>