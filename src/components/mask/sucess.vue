<template>
  <div class="mask_sucess" id="maskSucess">
    <img src="../../images/info_success.png">
    <a href="javascript:;" class="return_btn" @click="goindex()"></a>
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
      goindex(){
        this.$router.push({ path:'/index'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_sucess{
    position: absolute;top: 0;right: 0;left: 0;bottom: 0;margin: auto;
    z-index:99;text-align: center;
    img{
      width: 100%;height: 100%;
    }
    .return_btn{
      position: absolute;top: 66%;bottom: 28%;left: 30%;right: 30%;margin: auto;
    }
  }
</style>
