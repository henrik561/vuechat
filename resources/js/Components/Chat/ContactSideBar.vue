<template>
    <div class="w-1/4 bg-transparent max-viewport-height flex flex-col contact-sidebar">
        <Search @searchInUsers="searchInUsers"></Search>
        <perfect-scrollbar class="overflow-y-scroll w-full">
            <template v-for="user in getAllUsers">
                <User :user="user"></User>
            </template>
                <div class="flex w-full min-h-full py-6 justify-center items-center" v-if="!hasUsers">
                    <span class="text-white">Geen contacten gevonden!</span>
                </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
import User from "./ContactSideBar/User";
import Search from "./ContactSideBar/Search";
import {mapGetters} from "vuex";

export default {
    name: "ContactSideBar",
    components: {Search, User},

    data() {
        return {
            filterWord: '',
        }
    },

    computed: {
        ...mapGetters(['getAllUsers']),

        hasUsers() {
            return !_.isEmpty(this.getAllUsers);
        }
    },

    methods: {
        searchInUsers(keyword) {
            this.filterWord = keyword;
        },
    },


}
</script>

<style scoped>

    .max-viewport-height {
        height: calc(100vh - 4rem);
    }

</style>