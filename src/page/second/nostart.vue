<template>
  <div>
    <div class="warp-two" id="nostart">
      <img src="../../images/not-draw.jpg" class="bg">
      <div class="b-slider">
        <div class="copy-text">
          {{yhq}}
        </div>
        <div class="zhusi">在伊利微商城购买液态奶品，满50元即可获得立减10元优惠券</div>
        <a href="https://yili.m.tmall.com/">
          <div class="go-duihuan">
            <img src="../../images/go-duihuan.png">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        yhq:localStorage.getItem("yhq")
      }
    },
    created () {
      let that=this;
      if(!localStorage.getItem("yhq")){
        let start='6252';
        let end=Math.floor(Math.random()*1000);
        let con=Math.floor(Math.random()*10000);
        that.yhq=start+con+end;
        localStorage.setItem("yhq",that.yhq)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .warp-two{
    position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index: -1;
    .bg{
      width: 100%;height: 100%;
    }
  }
  .b-slider{
    position: absolute;bottom: 0;left: 0;right: 0;margin: auto;height: auto;
    .copy-text{
      width: 9.5rem;margin:0 auto .2rem;height: 1.2rem;border: 2px solid #fff;background-color: #3a99d8;color: #333;text-align: center;font-size: .6rem;
      border-radius: 5px;line-height: 1rem;
    }
    .zhusi{
      max-width: 80%;margin: 0 auto;
      font-size: 8px;color: #3a99d8;text-align: center;
    }
    .go-duihuan{
      width: 5rem;margin: .3rem auto .1rem;
      img{
        width: 100%;
      }
    }
  }
</style>
