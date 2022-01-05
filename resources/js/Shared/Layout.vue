<template class="overflow-y-hidden">
    <div class="bg-gradient-to-br from-blue-800 to-purple-700">
        <Navbar></Navbar>

        <slot></slot>

        <Footer></Footer>
    </div>

</template>

<script>
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
export default {
    name: "Layout",
    components: {Footer, Navbar}
}
</script>

<style scoped>

</style>