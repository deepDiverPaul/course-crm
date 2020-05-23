<template>
    <div id="app">
        <Navbar/>
        <div class="section">
            <div class="container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss">
    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";
    // Set your colors
    $primary: #1B5E20;
    $primary-invert: findColorInvert($primary);
    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";
</style>
