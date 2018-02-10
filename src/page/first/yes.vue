<template>
  <div>
    <div class="warp">
      <img src="../../images/success.jpg" class="bg">
      <img src="../../images/lotter.png" class="lottery">
      <a href="javascript:;" class="skip" @click="goform()"></a>
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
      goform(){
        this.$router.push('/firstform')
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*抽奖成功*/
  .lottery{
    width: 14rem;
    position: absolute;bottom: 5.5rem;left: 0;right: 0;margin: auto;
  }
  .skip{
    position: absolute;bottom: 0;left: 0;right: 0;height: 20%;margin: auto;
  }
</style>
