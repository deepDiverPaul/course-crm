<template>
    <section>
        <div class="level">
            <div class="level-right buttons has-text-right">
                <router-link to="customer/add" class="button is-primary is-outlined">
                    <b-icon icon="plus" pack="fas" size="is-small"></b-icon>
                    <span>Neu</span>
                </router-link>
            </div>
        </div>

        <b-table
                :data="$root.data.customers"
                :bordered="false"
                :striped="true"
                :narrowed="false"
                :hoverable="true"
                :mobile-cards="true"
                v-bind="rerender">

            <template slot-scope="props">
                <b-table-column field="customerId" label="Kd.-Nr." width="80">
                    {{ props.row.customerId }}
                </b-table-column>
                <b-table-column field="firstname" label="Anrede">
                    {{ props.row.gender === 'female' ? 'Frau' : ( props.row.gender === 'male' ? 'Herr' : '') }}
                </b-table-column>
                <b-table-column field="firstname" label="Vorname">
                    {{ props.row.firstname }}
                </b-table-column>
                <b-table-column field="lastname" label="Nachname">
                    {{ props.row.lastname }}
                </b-table-column>
                <b-table-column label="Aktionen">
                    <router-link :to="{ name: 'CustomerEdit', params: { _id: props.row._id } }">
                        <b-icon icon="user-edit" pack="fas"></b-icon>
                    </router-link>
                </b-table-column>
            </template>
            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                    icon="frown"
                                    size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<script>
    export default {
        name: "Customers",
        data(){
            return {
                rerender: 0
            }
        },
        methods: {
            async update(){
                await this.$root.updateData.customers()
                this.rerender++
            }
        },
        async created() {
            await this.update()
        }
    }
</script>

<style scoped>

</style>
