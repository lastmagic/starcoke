<template>
  <div>
    <Header/>
    <form action="/login" method="POST">
      <div class="login-wrap">
        <h1 class="login-title">Login</h1>
        <div>
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter Email Address" class="login-input" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" class="login-input" required>
        </div>
        <div class="login-button-area">
          <button type="submit" class="login-button bc-primary t_white">로그인</button>
          <router-link class="login-button t_primary center border-primary" :to="{ name: 'register' }">회원가입</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header,
  },
  data () {
    return {

    }
  },
  methods: {
    login() {
      this.axios({
        method: 'post',
        url: '/api/login',
        data: {
          'email': this.email,
          'password': this.password,
        },
        // headers: {'DINO-REQUEST-HEAD': 'XMLHttpRequest'},
      }).then(response => {
        this.apiResponse = response
        this.$router.push({
          name: 'home'
        })
      })
    },
  }
}
</script>