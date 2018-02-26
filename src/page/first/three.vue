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
          <div class="qqx"><img src="../../images/QQxing.png" ></div>
          <div class="ectr_title">
            <img src="../../images/two-title.png" >
            <img src="../../images/once-more.png"  class="once-more">
          </div>
          <div class="ectr_net">
            <img src="../../images/qwang.png" >
          </div>
          <!--<div class="ectr_title">-->
            <!--<img src="../../images/index_header.png">-->
          <!--</div>-->
          <div class="ectr_timg" @touchstart="touchstart()" @touchmove="touchmove()"  @touchend="touchend()"></div>
        </div>
        <div class="energy-bar">
          <div class="bar-ruler"></div>
          <div class="bar-num" :style="'height:'+barnum+'rem'"></div>
        </div>
      </div>
      <img src="../../images/tizuqiu.png" class="timgurl" hidden>
      <img src="../../images/timg/ball0001.png" class="timgimg" hidden>
      <img src="../../images/timg/ball0002.png" class="timgimg" hidden>
      <img src="../../images/timg/ball0003.png" class="timgimg" hidden>
      <img src="../../images/timg/ball0004.png" class="timgimg" hidden>
      <img src="../../images/timg/ball0005.png" class="timgimg" hidden>
      <img src="../../images/timg/ball0006.png" class="timgimg" hidden>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        bgflag:true,
        barnum:'2',
        bartype:'',
        t:'',
        n:1,
        fruit:true,
        degree:3,
      }
    },
    created () {
      let that=this;
    },
    mounted(){

    },
    methods:{
      start(){
        this.bgflag=false;
      },
      touchstart(){
        let that=this;
        that.t=setInterval(_ => {
          if(that.barnum < 4.2) {
            that.barnum+=0.3;
          } else {
            that.barnum=0;
          }
        }, 100);
      },
      touchmove(){
        console.log(2)
      },
      touchend(){
        let that=this;
        clearInterval(that.t);
        if(that.barnum>4.1){
          console.log('力气过大');
          that.bartype='力气过大'
        }else if(that.barnum<2.8){
          console.log('力气过小');
          that.bartype='力气过小'
        }else{
          console.log('获取数据');
          that.bartype='获取数据'
        }
        let t1 = setInterval(_=> {
          that.n++;
          if (that.n >= 7) {
            that.n = 1;
          }
          let timgurl=$('.timgimg').eq(that.n).attr("src");
          $(".ectr_timg").css("background-image", "url(" + timgurl + ")");
        }, 100);
        switch (that.bartype){
          case '力气过小':
            $(".ectr_timg").addClass("shoot-no");
            document.querySelector(".shoot-no").addEventListener("webkitAnimationEnd", function () {
              //动画重复运动时的事件
              clearInterval(t1);
              that.degree--;
              if (that.degree < 0) {
                setTimeout(function () {
                  $(".once-more").hide();
                  that.$router.push('/firstno');
                }, 500);
              } else {
                $(".once-more").show();
                setTimeout(function () {
                  $(".ectr_timg").removeClass("shoot-no").css({"background-image": "url("+$('.timgurl').attr("src")+")"});
                  $(".once-more").hide();
                }, 1500);
              }
            }, false);
            break;
          case '力气过大':
            $(".ectr_timg").addClass("shoot-out");
            document.querySelector(".shoot-out").addEventListener("webkitAnimationEnd", function () {
              clearInterval(t1);
              //动画重复运动时的事件
              that.degree--;
              if (that.degree < 0) {
                setTimeout(function () {
                  $(".once-more").hide();
                  that.$router.push('/firstno');
                }, 500)
              } else {
                $(".once-more").show();
                setTimeout(function () {
                  $(".ectr_timg").removeClass("shoot-out").css({"background-image": "url("+$('.timgurl').attr("src")+")"});
                  $(".once-more").hide();
                }, 1500);
              }
            }, false);
            break;
          case '获取数据':
              //能量条刚好
              $(".ectr_timg").addClass("shoot-yes");
              document.querySelector(".shoot-yes").addEventListener("webkitAnimationEnd", function () {
                //动画重复运动时的事件
                clearInterval(t1);
                setTimeout(function () {
                  that.$router.push('/firstyes');
                }, 1000)
              }, false);
            break;
        }

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
