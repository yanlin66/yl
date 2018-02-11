<template>
  <div>
    <div class="warp">
      <img src="../../images/no-sorry.jpg" class="bg">
      <router-link :to="{ path: 'index' }">
        <span class="skip"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
  }
</script>

<style lang="scss" scoped>
  .warp-two {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
  }
  .warp-two .bg {
    width: 100%;
    height: 100%;
  }
  .skip{
    display: block;
    position: absolute;bottom: 0;left: 0;right: 0;height: 20%;margin: auto;
  }
</style>
