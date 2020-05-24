import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import {cockpit} from "./lib/cockpit";

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    router,
    data() {
        return {
            'env': {
                loading: false
            },
            cp: cockpit
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        if (this.cp.getAuth() === false) this.$router.push({name: 'Login'})
    },
    render: h => h(App)
}).$mount('#app')
