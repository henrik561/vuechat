<template>
    <div class="w-full h-12 flex relative border-b border-blue-500">
        <input v-model="searchKeyWord" class="pl-2 w-full outline-none border-none" type="text" name="searchKeyWord" id="searchKeyWord" placeholder="Zoeken..." />
        <div class="bg-white w-12 h-full flex justify-center items-center absolute right-0 top-0">
            <i class="fas fa-search"></i>
        </div>
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