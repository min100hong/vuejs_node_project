<template>
  <div>
    <h1>로그인</h1>
    <br>
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="Email를 입력하세요"
    />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password를 입력하세요"
    />
    <button
      @click="register"
    >
      로그인
    </button>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
