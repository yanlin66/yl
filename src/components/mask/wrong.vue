<template>
  <div class="mask_no" id="maskNo">
    <div class="mask_content">
      <img src="../../images/ts-bg.png" class="mask-bg">
      <div class="content">
        <h1>温馨提示</h1>
        <p>您还未输入手机号码参与抽奖<br>赶紧行动吧！</p>
        <div class="btn">
          <img src="../../images/yes-btn.png" >
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
      }
    },
    mounted(){

    },
    methods: {
      closeTip(){
        $(".mask_error").fadeOut();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_no{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);
    .mask_content{
      margin: 40% auto 0;text-align: center;position: relative;
    }
    .mask-bg{
      width: 80%;
    }
    .content{
      width: 10rem;height: 10rem;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;
      h1{
        margin-top: .5rem;height: 1.4rem;
      }
      p{
        width: 80%;font-size: .9rem;color: #d03737;margin: 1rem auto;
      }
      .btn{
        width: 50%;margin: 1rem  auto 0;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
