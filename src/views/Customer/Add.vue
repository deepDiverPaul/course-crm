<template>
    <section>
        <div class="container is-size-3">
            {{lang.headline}}
        </div>
        <div class="container form">
            <b-field label="Kundennummer">
                <b-input v-model="form.customerId"></b-input>
            </b-field>
            <b-field label="Vorname">
                <b-input v-model="form.firstname"></b-input>
            </b-field>
            <b-field label="Nachname">
                <b-input v-model="form.lastname"></b-input>
            </b-field>
            <b-field label="e-mail">
                <b-input v-model="form.email"></b-input>
            </b-field>
            <b-field label="Telefon">
                <b-input v-model="form.phone"></b-input>
            </b-field>
            <b-field label="Anrede">
                <b-select v-model="form.gender">
                    <option value="female">
                        Frau
                    </option>
                    <option value="male">
                        Herr
                    </option>
                </b-select>
            </b-field>
            <b-field>
                <p class="control buttons">
                    <b-button @click="add()" type="is-success">
                        {{lang.submit}}
                    </b-button>
                    <router-link :to="{name: 'Customers'}" class="button is-warning">
                        <span>Abbrechen</span>
                    </router-link>
                </p>
            </b-field>
        </div>

    </section>
</template>

<script>
    export default {
        name: "CustomerAdd",
        data() {
            return {
                form: {}
            }
        },
        methods: {
            async add() {
                await this.$root.cp.request(
                    'collections/save/customers',
                    {data: this.form},
                    (customers) => customers.entries
                )
                this.$router.push({name: 'Customers'})
            }
        },
        created() {
            if (this.mode === 'edit') this.form = this.$root.data.customers.find(c => c._id === this.$route.params._id)
        },
        computed: {
            mode() {
                let m = 'add'
                if (this.$route.name === 'CustomerEdit' && this.$route.params._id) m = 'edit'
                return m
            },
            lang() {
                let l = {
                    headline: 'Neuen Kunden hinzufügen',
                    submit: 'Erstellen'
                }
                if (this.mode === 'edit') l = {
                    headline: this.form.firstname + ' ' + this.form.lastname + ' bearbeiten',
                    submit: 'Speichern'
                }

                return l
            }
        }
    }
</script>

<style scoped>
    .form {
        margin-top: 1.5rem;
    }
</style>
