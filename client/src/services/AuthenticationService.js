import Api from '@/services/Api'

export default {
  register: (arg) => {
    return Api().post('register', arg)
  }
}

// Authenticate.register({
//   email: 'test@gmail.com',
//   password: '1234'
// })