<template>
    <div class="w-full h-12 flex border-b-2 relative border-blue-800">
        <input v-model="searchKeyWord" class="pl-2 w-full outline-none border-none" type="text" name="searchKeyWord" id="searchKeyWord" placeholder="Zoeken..." />
        <div @click="emptySearchbar" class="absolute cursor-pointer text-black z-10 top-2 right-6">X</div>
    </div>
</template>

<script>

import { debounce } from 'lodash';

export default {
    name: "Search",

    data() {
        return {
            searchKeyWord: "",
        }
    },

    methods: {
        emptySearchbar() {
            this.searchKeyWord = "";
        },
    },

    watch: {
        searchKeyWord: debounce(function(value) {
            this.$emit('searchInUsers', value);
        }, 500)
    }
}
</script>

<style scoped>

</style>