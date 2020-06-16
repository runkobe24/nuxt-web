import axios from 'axios'
axios.defaults.baseURL = null
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
