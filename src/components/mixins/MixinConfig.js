export default {
  data() {
    return {
      config: undefined,
    }
  },
  mounted() {
    if (localStorage.getItem('starcokeConfig')) {
      try {
        const token = localStorage.getItem('starcokeConfig')
        this.config = this.$jwt.decode(token).config
      } catch(e) {
        this.$swal('로그인 토큰 만료', '로그인 화면으로 이동합니다.', 'error')
        localStorage.removeItem('starcokeConfig')
        this.$router.push({
          name: 'login'
        })
      }
    } else {
      this.$swal('로그인 필요', '로그인 화면으로 이동합니다.', 'info')
      this.$router.push({
        name: 'login'
      })
    }

    if (this.load && typeof this.load === 'function') {
      this.load()
    }
  },
  computed: {
    isLogIned() {
      if (localStorage.getItem('starcokeConfig') && this.config && typeof this.config === 'object') {
        return true
      }

      return false
    }
  },
  methods: {
    logout() {
      this.$swal('로그아웃', '로그아웃 되었습니다. 로그인 화면으로 이동합니다.', 'info')
      localStorage.removeItem('starcokeConfig')
      this.$router.push({
        name: 'login'
      })
    },
  },
}