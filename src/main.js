import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import {cockpit} from "./lib/cockpit";
import VCalendar from 'v-calendar'

Vue.use(Buefy, {
    defaultIconPack: 'far'
})

import Datepicker from '@/components/Datepicker.vue'
Vue.component('Datepicker', Datepicker)

import Timepicker from '@/components/Timepicker.vue'
Vue.component('Timepicker', Timepicker)

Vue.use(VCalendar)

Vue.prototype.$uuid = () => {
    let b = a => a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)
    return b()
}

var moment_ = require('moment')
moment_.locale('de')

Vue.prototype.$moment = moment_

Vue.config.productionTip = false

new Vue({
    router,
    data() {
        return {
            'env': {
                loading: false
            },
            data: {},
            cp: cockpit,
            updateData:{
                courses: async () => {
                    this.data.courses = await this.cp.request(
                        'collections/get/courses',
                        {},
                        (data) => data.entries
                    )
                },
                courseexeptions: async () => {
                    this.data.courseexeptions = await this.cp.request(
                        'collections/get/courseexeptions',
                        {},
                        (data) => data.entries
                    )
                },
                customers: async () => {
                    this.data.customers = await this.cp.request(
                        'collections/get/customers',
                        {},
                        (data) => data.entries
                    )
                }
            }
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        if (this.cp.getAuth() === false) this.$router.push({name: 'Login'})
    },
    render: h => h(App)
}).$mount('#app')
