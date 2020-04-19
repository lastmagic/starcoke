<template>
<div>
  <Header/>
  <div class="pt-5">
    <div class="indexpage-img index-img pt-8" >
      <div class="wrapper"><h1>STARCOKE</h1></div>
      <div class="title t_black">원하는 그룹을 선택하고 응원해보세요 !</div>
    </div>
  </div>
  <section class="site-home-scene" style="margin-top: 250px;">
    <div class="inner-container">
        <div class="row">
          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 1} }">
            <img src="@/assets/img2/idol/blueberry1.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 7,700,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">77% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" style="margin-top: -20px; float: left;">블루베리</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;sticky entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              ‘BLUEBERRY'는 래퍼 블루와 비트메이커 허클베리로 구성된 남성 래퍼 듀오 그룹이다.
            </div>
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 2} }">
            <img src="@/assets/img2/idol/him2.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 255,250,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">255% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-bold mb-2" style="margin-top: -20px; float: left;">H.I.M</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;RADAR entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              2015년 3월 정규 1집 '1992'로 데뷔하자마자 각종 음원 사이트에서 앨범 전곡을 차트인 시켰던 괴물신인 'H.I.M.'
            </div>
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 3} }">
            <img src="@/assets/img2/idol/atypical1.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 3,000,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">20% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-bold mb-2" style="margin-top: -20px; float: left;">Atypical</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;FLEX entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              ‘Atypical'은 케이시, 이지, 페이로 구성된 여성 아크로바틱 댄스 그룹이다. 당당하고 신인답지 않은 여유로움이 매력적이다.
            </div>
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 4} }">
            <img src="@/assets/img2/idol/nana1.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 70,000,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">59% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" style="margin-top: -20px; float: left;">나나칸타빌레</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;가리볼디 entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              '나나 칸타빌레'는 오드리와 베스로 구성되어 있는 싱어송라이팅 여성 인디 듀오다. 피아노와 기타, 우쿨렐레, 캐스터네츠, 멜로디언 등 다양한 악기들과 무대를 꾸리는게 특징이다.
            </div>
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 5} }">
            <img src="@/assets/img2/idol/journey1.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 5,000,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">57% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" style="margin-top: -20px; float: left;">JOURNEY</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;People entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              'Jorney'는 대학교 재학시절 밴드 동아리 친구들끼리 사회에 나와 다시 결성한 혼성 밴드 그룹이다. 
            </div>
          </router-link>
          
          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'detail', params: {idolId: 6} }">
            <img src="@/assets/img2/idol/max2.png" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left">목표금액 5,000,000원</span>
                <span class="pr-2 t_white f15 font-weight-700 right">107% 달성</span>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div> 
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" style="margin-top: -20px; float: left;">MAX</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;일리 entertainment</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              보컬, 랩, 작사·작곡, 뭐든지 잘하는 만능 엔터테이너 MAX. 매력적인 허스키한 목소리와 알 수 없는 강인한 이미지가 돋보이는 싱어송라이터다.
            </div>
          </router-link>
          <div style="height: 80px;"> &nbsp;</div>
        </div>
    </div>
  </section>
</div>
</template>

<script>
import Header from '@/components/header'
import MixinConfig from '@/components/mixins/MixinConfig'

export default {
  mixins: [MixinConfig],
  components: {
    Header,
  },
}
</script>

<style scoped>
  .position-relative{
    background-color: #1B2733 !important;
    height: 390px;
  }
  .inner-container{
    padding-top: 60px !important;
  }

</style>
