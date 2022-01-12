<template>
    <div class="w-full h-full p-4">
        <div class="mb-3">
            <h1 class="text-white font-bold text-xl">Create a group chat</h1>
        </div>
        <div class="w-full flex flex-col gap-3 h-12">
            <input name="group-name" class="px-4 py-2 rounded-3xl" placeholder="Group name...">
            <input name="group-description" class="px-4 py-2 rounded-3xl" placeholder="Group description...">
            <button class="px-4 py-2 rounded-3xl bg-green-500 text-white">Create group</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Groupchat"
}
</script>

<style scoped>

</style>