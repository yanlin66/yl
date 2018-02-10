<template>
  <div>
    <div class="mask_yes" id="maskYes">
      <div class="mask_content">
        <img src="../../images/rule-bg.png" class="mask-bg">
        <div class="content">
          <h1>提交成功</h1>
          <div class="erweima">
            <img src="../../images/erweima.png">
          </div>
          <h3>长按二维码了解中奖情况</h3>
        </div>
        <div class="mask_close" @click="gostatus()"></div>
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
    methods: {
      gostatus(){
        this.$router.push({ path:'/nostart'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_yes{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);
    .mask_content{
      margin: 40% auto 0;text-align: center;position: relative;
      .mask_close{
        position: absolute;right: 2rem;bottom: 0;width: 3rem;height: 3rem;
      }
    }
    .mask-bg{
      width: 80%;
    }
    .content{
      width: 10rem;height: 10rem;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;
      h1{
        font-size: 1.2rem;text-align: center;color: #085592;margin-top: .5rem;
      }
      .erweima{
        width: 70%;margin: 0 auto;
        img{
          width: 100%;
        }
      }
      h3{
        font-size: 12px;text-align: center;color: #d03737;font-weight: 500;
      }
    }
  }
</style>
