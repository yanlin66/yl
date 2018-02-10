<template>
  <div class="mask_ts" id="maskTs">
    <div class="mask_content">
      <img src="../../images/two.png">
      <div class="close_mask"></div>
      <div class="close-btn"  @click="closeTip"></div>
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
        $(".mask_ts").fadeOut();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_ts{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);display: none;
    .mask_content{
      margin: 40% auto 0;text-align: center;position: relative;
    }
    img{
      width: 80%;
    }
    .close_mask{
      width: 40%;height:5rem;
      position: absolute;bottom: 0;left: 0;right: 0;margin: auto;
    }
    .close-btn{
      position: absolute;bottom: 0;right: 1rem;width: 4rem;height: 4rem;
    }
  }
</style>
