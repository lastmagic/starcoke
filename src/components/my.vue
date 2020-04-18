<template>
  <div>
    <Header/>
    <div class="pt-5">
      <div class="mypage-img my-img"></div>
      <div class="py-5">
        <div class="wrapper py-xl-5">
          <div class="portfolio-caption">
            <div class="portfolio-caption t_white font-weight-500"><div class="h1 mb4">{{username}}</div></div>
            <div class="portfolio-caption t_white font-weight-500">{{balance}} <span class="h1 mb4">RWT</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-3">
      <div class="row justify-content-between">
        <div class="mb-3" style="margin-top: 6rem;">
          <h3>History</h3>
          <button @click="clearHistory"><span>Clear History</span></button>
        </div>
        <table class="tbl">
            <colgroup>
            <col style="width:20%">
            <col style="width:40%">
            <col style="width:10%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">일시</th>
              <th scope="col">항목</th>
              <th scope="col">실행결과</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="`${i}`" v-for="(history, i) in History">
              <td scope="row">{{history.time}}</td>
              <td><time datetime="">{{history.name.toUpperCase()}}</time></td>
              <td>
                <time datetime="" v-bind:style="{color: history.color}">{{history.status}}</time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import BigNumber from 'bignumber.js'

export default {
  components: {
    Header,
  },
  mounted() {
    if (localStorage.getItem('starcokeConfig')) {
      try {
        const token = localStorage.getItem('starcokeConfig')
        this.config = this.$jwt.decode(token).config
      } catch(e) {
        this.$swal('로그인 에러가 발생했습니다.', '로그인 화면으로 이동합니다.', 'error')
        localStorage.removeItem('starcokeConfig')
        this.$router.push({
          name: 'login'
        })
      }
    }

    if (localStorage.getItem('historyFilter')) {
      try {
        const historyFilterStr = localStorage.getItem('historyFilter')
        this.historyFilter = this.$moment.utc(new Date(historyFilterStr))
      } catch(e) {
        this.$swal('Filter Error', 'Filter를 찾을 수 없습니다.', 'error')
        localStorage.removeItem('historyFilter')
      }
    }
    this.load()
  },
  data() {
    return {
      config: undefined,
      balance: 0,
      isLoading: false,
      historyFilter: undefined,
      History: [
      ]
    }
  },
  computed: {
    walletAddress() {
      return (this.config || {}).walletAddress
    },
    mtSymbol() {
      return ((this.config || {}).mt || {}).symbol
    },
    stSymbol() {
      return ((this.config || {}).st || {}).symbol
    },
    apiKey() {
      return ((this.config || {}).dapp || {}).apiKey
    },
    username() {
      return (this.config || {}).userName ? this.config.userName + ' 님의 지갑' : '지갑'
    },
  },
  methods: {
    load() {
      this.axios.get(`https://api.luniverse.io/tx/v1.0/wallets/${this.walletAddress.user}/${this.mtSymbol}/${this.stSymbol}/balance`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      })
        .then((response) => {
          this.balance = response.data.data.balance;
          this.balance = (BigNumber(this.balance)).div((BigNumber('10')).pow(18)).toFixed(5);
        })
        .catch(() => {
          this.balance = 0;
        });
      
      this.axios.get(`https://api.luniverse.io/tx/v1.0/histories?next=0`,{
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `application/json`
        },
      })
        .then((response) => {
          var temp=response.data.data.histories.items.filter(valid => {
            let res = (valid.txStatus==="SUCCEED" || valid.txStatus==="FAILED") && [this.config.txActionName.funding, this.config.txActionName.like, this.config.txActionName.purchase].indexOf(valid.actionName) !== -1

            if (this.historyFilter && typeof this.historyFilter === 'object') {
              const createdAt = this.$moment.utc(valid.createdAt)
              res = res && createdAt.isAfter(this.historyFilter)
            }
            
            return res;
          });
          temp.map(tx => this.History.push({time: tx.createdAt.substring(0,10), name: tx.actionName, status: tx.txStatus}));
          this.History.map(history => {
            if(history.status === "SUCCEED"){
              history.color="#00B580"
            }
            else if(history.status === 'FAILED'){
              history.color="#F14E4E"
            }
          })
        })
        .catch(() => {
        })
    },
    clearHistory() {
      const now = this.$moment.utc(new Date())
      localStorage.setItem('historyFilter', now);
      this.$swal('Success', '내역 삭제가 완료되었습니다.', 'success')
    },
  }
}
</script>