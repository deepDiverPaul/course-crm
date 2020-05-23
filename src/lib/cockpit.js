export let cockpit = {
    url: 'https://cockpit.startup.deep-node.de/api/',
    lastRequest: '',
    user: {},
    authorized() {
        let auth = true
        auth = this.user.api_key == '' ? false : auth
        return auth
    },
    logout() {
        this.user.api_key = ''
        return true
    },
    login() {
        this.request(
            'public/auth',
            {
                user: 'test',
                password: 'password'
            },
            (user) => {
                if(user.error){
                    return false
                }else{
                    this.user = user
                    return true
                }
            },
            () => false
        )
    },
    async request(task, payload = {}, success = data => console.log(data), failure = data => console.log(data)) {
        if (this.authorized() || task === 'public/auth') {
            this.$root.env.loading = true
            return await fetch(this.url + task + '?token=' + this.user.api_key, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(res => success(res))
                .catch(err => failure(err))
                .finally(() => {this.$root.env.loading = false})
        } else {
            failure("Not authorized")
        }
    }
}
