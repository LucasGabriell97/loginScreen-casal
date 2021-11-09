import api from '../api'
import { login } from '../auth'

export default async function getToken(name, password) {
    await api.post('v2/auth/login', {
            "username": name,
            "password": password
    })
    .then(function(response) {
            login(response.data.data.token)
            console.log(response.data.data.token)
    })
    .catch(function(error) {
            console.log(error)
            alert(error.response.data)
    })
}

