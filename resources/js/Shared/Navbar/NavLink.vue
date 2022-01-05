<template>
    <Link class="text-white transition duration-300 rounded-xl py-2 px-12 font-bold hover:underline hover:bg-white hover:text-blue-800" :class="{ 'font-bold underline' : active }">
        <slot></slot>
    </Link>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';

export default {
    name: "NavLink",
    components: { Link },
    props: ['active'],
}
</script>

<style scoped>

</style>