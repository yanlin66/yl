<template>
  <div>
    <div class="warp" id="game1-no">
      <img src="../../images/faile.jpg"  class="bg">
      <a href="javascript:;" class="skip" @click="goindex()"></a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    methods:{
      goindex(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skip{
    position: absolute;bottom: 0;left: 0;right: 0;height: 20%;margin: auto;
  }
</style>
