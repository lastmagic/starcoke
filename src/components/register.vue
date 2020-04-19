<template>
  <div>
    <Header/>
    <form @submit.prevent="register">
      <div class="login-wrap">
        <h1 class="login-title">Register</h1>
        <div>
          <label for="name">Name</label>
          <input type="name" v-model="name" id="name" name="name" placeholder="Enter name" class="login-input" required>
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" v-model="email" id="email" name="email" placeholder="Enter Email Address" class="login-input" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" name="password" placeholder="Enter password" class="login-input" required>
        </div>
        <div class="login-button-area">
          <button type="submit" class="login-button t_primary bc-primary t_white" style="flex-basis:100%; margin-right:0;">회원가입</button>
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
      apiResponse: null,
      name: undefined,
      email: undefined,
      password: undefined,
    }
  },
  methods: {
    register() {
      this.axios({
        method: 'post',
        url: '/api/register',
        data: {
          'name': this.name,
          'email': this.email,
          'password': this.password,
        },
        headers: {'DINO-REQUEST-HEAD': 'XMLHttpRequest'},
      }).then(response => {
        if (response && response.status === 200) {
          this.$router.push({
            name: 'login'
          })
        }
      }).catch(() => {
        this.$swal('Error', '이미 가입된 이메일이 존재합니다.', 'error')
      })
    }
  }
}
</script>