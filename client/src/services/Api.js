import axios from 'axios'
// import Vue from 'vue'
// import AxiosPlugin from 'vue-axios-cors'

// Vue.use(AxiosPlugin)

export default () => {
  // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
