<template>
    <form class="h-20 relative w-full bottom-0 border-t-4 border-white flex bg-transparent justify-between p-4">
        <input v-model="message" class="rounded-xl ml-2 p-2 h-12 w-10/12 bg-white" placeholder="Uw bericht...">
        <button @click.prevent="addMessage" class="mx-4 bg-white rounded-xl px-4">Verzenden</button>
    </form>
</template>

<script>
export default {
    name: "newMessage",

    data() {
        return {
            message: '',
        }
    },

    methods: {
        addMessage() {
            if(this.message === '') {
                return;
            }
            this.$emit("addMessage", this.message);
            this.message = '';
        }
    }
}
</script>

<style scoped>

</style>