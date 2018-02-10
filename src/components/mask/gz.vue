<template>
  <!--关注公众号-->
  <div v-if="gzflag">
    <div class="mask_gz" id="maskGz">
      <div class="mask_content">
        <img src="../../images/gz-gngzhonghao.png">
        <div class="close_mask" @click="close()"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'
  export default {
    data(){
      return{
        gzflag:true
      }
    },
    mounted(){

    },
    methods: {
      close(){
        this.gzflag=false;
        setTimeout(_ => {
          this.gzflag=true;
        }, 300);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_gz {
    position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    margin: auto;z-index: 99;display: none;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mask_gz .mask_content {
    margin: 40% auto 0;
    text-align: center;
    position: relative;
  }
  .mask_gz img {
    width: 80%;
  }
  .mask_gz .close_mask {
    width: 40%;
    height: 5rem;
    position: absolute;
    bottom: 0;right: 0;
    margin: auto;
  }
</style>
