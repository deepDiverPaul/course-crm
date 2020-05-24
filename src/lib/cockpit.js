export let cockpit = {
    url: 'https://cockpit.susannespenke.deep-node.de/api/',
    loading: false,
    user: {},
    authorized() {
        let auth = true
        auth = typeof this.user.api_key !== 'string' ? false : auth
        return auth
    },
    getAuth(){
        let u
        u = localStorage.getItem('user')
        if (u === null) {
            return false
        }
        this.user = JSON.parse(u)
        return true
    },
    logout() {
        this.user = {}
        localStorage.removeItem('user')
        return !this.getAuth()
    },
    async login(username, password) {
        return await this.request(
            'public/auth',
            {
                user: username,
                password: password
            },
            (user) => {
                if(user.error){
                    return false
                }else{
                    this.user = user
                    localStorage.setItem('user', JSON.stringify(user))
                    return true
                }
            },
            () => false
        )
    },
    async request(task, payload = {}, success = data => console.log(data), failure = data => console.log(data)) {
        if (this.authorized() || task === 'public/auth') {
            this.loading = true
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
                .finally(() => {this.loading = false})
        } else {
            failure("Not authorized")
        }
    }
}
