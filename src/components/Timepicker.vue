<template>
<div>
    <b-timepicker :hour-format="'24'" v-model="date" :min-time="minP" :max-time="maxP" :placeholder="placeholder" :icon="icon" :icon-pack="pack" @input="$emit('change', temp)" :inline="inline" :disabled="disabled"></b-timepicker>
</div>
</template>

<script>
export default {
    name: 'Timepicker',
    model: {
        prop: 'dateParsed',
        event: 'change'
    },
    props: {
        dateParsed: String,
        placeholder: String,
        icon: String,
        pack: String,
        min: String,
        max: String,
        disabled: Boolean,
        inline: Boolean
    },
    data() {
        return {
            temp: this.dateParsed
        }
    },
    computed: {
        date: {
            get() {
                if (this.dateParsed) {
                    return this.$moment(this.dateParsed, "HH:mm").toDate()
                }
                return this.$moment().toDate()

            },
            set(val) {
                this.temp = this.$moment(val).format('HH:mm')
            }
        },
        minP() {
            if (this.min) {
                return this.$moment(this.min, 'HH:mm').toDate()
            } else {
                let date = this.$moment().hour(0).minutes(0)
                return date.toDate()
            }

        },
        maxP() {
            if (this.max) {
                return this.$moment(this.max, 'HH:mm').toDate()
            } else {
                let date = this.$moment().hour(23).minutes(59)
                return date.toDate()
            }
        }
    }
}
</script>
