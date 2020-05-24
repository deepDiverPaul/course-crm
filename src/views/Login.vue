<template>
    <b-modal :active.sync="isComponentModalActive" has-modal-card full-screen :can-cancel="false">
        <section class="hero is-primary is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="loginForm">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Login
                                </p>
                            </header>
                            <div class="card-content">
                                <form @submit.prevent="tryLogin">
                                    <section>
                                        <b-message type="is-danger" v-if="authFailed">
                                            Anmeldung fehlgeschlagen!
                                        </b-message>
                                        <b-field label="Benutzername">
                                            <b-input v-model="form.username"></b-input>
                                        </b-field>
                                        <b-field label="Passwort">
                                            <b-input icon-pack="far" type="password" v-model="form.password"
                                                     password-reveal>
                                            </b-input>
                                        </b-field>

                                        <b-button native-type="submit" :loading="form.loading">Einloggen</b-button>

                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </b-modal>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                authFailed: false,
                isComponentModalActive: true
            }
        },
        methods: {
            async tryLogin() {
                let auth
                auth = await this.$root.cp.login(this.form.username, this.form.password)
                if(auth === true) await this.$router.push({name: 'Home'})
                this.authFailed = !auth
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loginForm {
        min-width: 250px;
        max-width: 350px;
        margin: 0 auto;
    }
</style>
