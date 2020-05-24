<template>
<div>
    <b-datepicker
            :first-day-of-week="1"
            :nearby-selectable-month-days="true"
            :day-names="['So','Mo','Di','Mi','Do','Fr','Sa',]"
            :month-names="['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']"
            label-position=""
            v-model="date"
            :min-date="minP"
            :focused-date="focus"
            :max-date="maxP"
            :placeholder="placeholder"
            :icon="icon"
            :icon-pack="pack"
            @input="$emit('change', temp)"
            :inline="inline"
            :disabled="disabled">

    </b-datepicker>
</div>
</template>

<script>
export default {
    name: 'Datepicker',
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
                    return this.$moment(this.dateParsed, "YYYY-MM-DD").toDate()
                }
                return this.$moment().toDate()

            },
            set(val) {
                this.temp = this.$moment(val).format('YYYY-MM-DD')
            }
        },
        minP() {
            if (this.min) {
                return this.$moment(this.min, 'YYYY-MM-DD').toDate()
            } else {
                let date = this.$moment().subtract(3, 'M')
                return date.toDate()
            }

        },
        maxP() {
            if (this.max) {
                return this.$moment(this.max, 'YYYY-MM-DD').toDate()
            } else {
                let date = this.$moment().add(5, 'y')
                return date.toDate()
            }
        },
        focus(){
            if (this.dateParsed) {
                    return this.$moment(this.dateParsed, "YYYY-MM-DD").toDate()
                } else{
                    if (this.min) {
                        return this.$moment(this.min, 'YYYY-MM-DD').toDate()
                    }
                    if (this.max) {
                        return this.$moment(this.max, 'YYYY-MM-DD').toDate()
                    }

                    return this.$moment().toDate()
                }

        }
    }
}
</script>
