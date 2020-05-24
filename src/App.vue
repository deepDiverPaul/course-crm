<template>
    <div id="app">
        <Navbar/>
        <div class="section">
            <div class="container">
                <router-view/>
            </div>
        </div>
        <b-loading :is-full-page="true" :active.sync="$root.cp.loading"></b-loading>
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
    $primary: #0D7CE9;
    $primary-invert: findColorInvert($primary);
    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
            "white": ($white, $black),
            "black": ($black, $white),
            "light": ($light, $light-invert),
            "dark": ($dark, $dark-invert),
            "primary": ($primary, $primary-invert),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
            "danger": ($danger, $danger-invert)
    );
    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";
</style>
