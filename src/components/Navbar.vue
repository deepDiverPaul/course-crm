<template>
    <b-navbar shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                        src="../assets/logo.svg"
                        alt="Course CRM"
                        class="logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/customers' }">
                Kunden
            </b-navbar-item>
            <b-navbar-dropdown label="Kurse" hoverable>
                <b-navbar-item tag="router-link" :to="{ path: '/courses' }">
                    Übersicht
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/courses/calendar' }">
                    Kalender
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Produkte" hoverable>
                <b-navbar-item tag="router-link" :to="{ path: '/products/plans' }">
                    Stempelkarten
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/courses/single-course' }">
                    Einzelkurse
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a @click="logout()" class="button">
                        <strong>Logout</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            logout(){
                if (this.$root.cp.logout()) this.$router.push({name: 'Login'})
            }
        }
    }
</script>

<style scoped>
.logo{
object-fit: cover;
    width: 200px;
}
</style>
