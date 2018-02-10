<template>
  <div>
    <div v-if="bgflag">
      <div class="warp-sm" @click="start()">
        <img src="../../images/shuoming.png" class="bg">
      </div>
    </div>
    <div v-else>
      <div class="warp">
        <img src="../../images/extr_bg.jpg" class="bg">
        <div class="ectr_warp">
          <div class="ectr_logo">
            <img src="../../images/index_logo.png">
          </div>
          <div class="ectr_title">
            <img src="../../images/index_header.png">
          </div>
          <div class="ectr_timg" @click="golink()"></div>
        </div>
        <div class="energy-bar">
          <div class="bar-ruler"></div>
          <div class="bar-num"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        bgflag:true,
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    methods:{
      start(){
        this.bgflag=false;
      },
      golink(){
        this.$router.push('/firstyes')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  /*加载页*/
  .warp-sm{
    position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index: 99;
    .bg{
      width: 100%;height: 100%;
    }
  }
  .ectr_warp{
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;padding: 1.25rem;
    /*左侧LOGO*/
    .ectr_logo{
      width: 40%;
      img{
        width: 100%;
      }
    }
    .ectr_title{
      width: 13rem;margin: 1.5rem auto 0;position: relative;
      img{
        width: 100%;
      }
      .once-more{
        width: 80%;position: absolute;bottom:-5rem;height: 4.5rem;left: 0;right: 0;margin: auto;display: none;
      }
    }
    .ectr_net{
      width: 6rem;margin: 6rem auto 0;position: relative;text-align: center;
      img{
        width: 100%;
      }
    }
    /*球*/
    .ectr_timg{
      width: 4rem;height: 4rem;position: absolute;bottom: 2rem;left: 0;right: 0;margin: auto;text-align: center;
      background-position: center;background-repeat: no-repeat;background-size: cover;background-image: url(../../images/tizuqiu.png);
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .ectr_prompt{
      width:10rem;position: absolute;bottom: 1.25rem;left: 0;right: 0;margin: auto;
      font-size: 1.25rem;color: #fff;font-weight: 600;letter-spacing: .1rem;text-align: center;
    }
  }
  /*
*能量条
*/
  .energy-bar{
    width: .8rem;height: 4.5rem;border-radius: 5px;
    background-color: rgba(0,0,0,0);box-shadow:  0 0 6px rgba(0,0,0,.8) inset;
    position: fixed;bottom: 2.4rem;left: 1.8rem;border-left: 1px solid #f9f9f9;overflow: hidden;
    .bar-ruler{
      position: absolute;top: .675rem;width: 140%;height: 2px;background-color: #ffae00;left: -.1rem;z-index: 2;
    }
    .bar-num{
      width: .7rem;height: 2rem;background:linear-gradient(to left,#dadada 0%,#b0b0b0 50%,#dadada 80%);
      position: absolute;bottom: 0;left:0;border-radius: 5px;z-index: 1;
    }
    .bar-type1{
      animation: .8s bar-type ease infinite alternate;
    }
    .bar-ruler:after{
      content: "";
      position: absolute;
      right: 0;top: 0;bottom: 0;margin: auto;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 15px solid #ffae00;
      border-bottom: 7px solid transparent;
    }
  }
</style>
