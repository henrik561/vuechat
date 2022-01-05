<template>
    <div class="h-screen flex">
        <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
            <div>
                <h1 class="text-white font-bold text-4xl font-sans">VueChat</h1>
                <p class="text-white mt-1">The best place to stay connected!</p>
                <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "AuthLayout",
}
</script>
