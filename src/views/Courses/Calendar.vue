<template>
    <section>
        <v-calendar
        is-expanded
        :attributes='attributes'>

        </v-calendar>
    </section>
</template>

<script>
    export default {
        name: "Calendar",
        data(){
            return {
                attributes: [
                    {
                        key: 'today',
                        highlight: 'red',
                        dates: new Date(),
                    },
                    {
                        dot: 'green',
                        dates: [
                            new Date(2020, 4, 4), // Jan 4th
                            new Date(2020, 4, 10), // Jan 10th
                            new Date(2020, 4, 15), // Jan 15th
                        ],
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
