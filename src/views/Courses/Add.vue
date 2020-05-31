<template>
    <section>
        <div class="container is-size-3">
            {{lang.headline}}
        </div>
        <div class="container form">
            <b-field label="Titel">
                <b-input v-model="form.title"></b-input>
            </b-field>
            <b-field label="Beschreibung">
                <b-input type="textarea" v-model="form.description"></b-input>
            </b-field>

            <b-field label="Wochentag">
                <b-select v-model="form.weekday">
                    <option value="1">Montag</option>
                    <option value="2">Dienstag</option>
                    <option value="3">Mittwoch</option>
                    <option value="4">Donnerstag</option>
                    <option value="5">Freitag</option>
                    <option value="6">Samstag</option>
                    <option value="0">Sonntag</option>
                </b-select>
            </b-field>
            <b-field label="Ist es ein einmaliger Kurs?">
                <b-checkbox v-model="form.singleDate">Ja</b-checkbox>
            </b-field>
            <b-field label="Startdatum">
                <Datepicker
                        :inline="false"
                        v-model="form.start"
                        placeholder="Bitte auswählen..."
                        icon="calendar-day"
                        pack="fas">
                </Datepicker>
            </b-field>
            <b-field label="Enddatum" v-if="form.singleDate !== true">
                <Datepicker
                        :inline="false"
                        v-model="form.end"
                        placeholder="Bitte auswählen..."
                        icon="calendar-day"
                        pack="fas">
                </Datepicker>
            </b-field>
            <b-field label="Uhrzeit Beginn">
                <Timepicker placeholder="Bitte Auswählen..." v-model="form.starttime" :inline="false">
                </Timepicker>
            </b-field>
            <b-field label="Uhrzeit Ende">
                <Timepicker placeholder="Bitte Auswählen..." v-model="form.endtime" :inline="false">
                </Timepicker>
            </b-field>
            <b-field>
                <p class="control buttons">
                    <b-button @click="add()" type="is-success">
                        {{lang.submit}}
                    </b-button>
                    <router-link :to="{name: 'Courses'}" class="button is-warning">
                        <span>Abbrechen</span>
                    </router-link>
                </p>
            </b-field>
        </div>

    </section>
</template>

<script>
    export default {
        name: "CoursesAdd",
        data() {
            return {
                form: {},
                options: {}
            }
        },
        methods: {
            async add() {
                await this.$root.cp.request(
                    'collections/save/courses',
                    {data: this.form},
                    (customers) => customers.entries
                )
                this.$router.push({name: 'Courses'})
            }
        },
        created() {
            if (this.mode === 'edit') this.form = this.$root.data.courses.find(c => c._id === this.$route.params._id)
        },
        computed: {
            mode() {
                let m = 'add'
                if (this.$route.name === 'CoursesEdit' && this.$route.params._id) m = 'edit'
                return m
            },
            lang() {
                let l = {
                    headline: 'Neuen Kurs hinzufügen',
                    submit: 'Erstellen'
                }
                if (this.mode === 'edit') l = {
                    headline: this.form.title + ' bearbeiten',
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
