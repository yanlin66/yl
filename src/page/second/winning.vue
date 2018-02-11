<template>
  <div>
    <div class="warp-two">
      <img src="../../images/index-bg.jpg" class="bg">
      <div class="index_warp clear">
        <div class="index_logo">
          <img src="../../images/index_logo.png">
        </div>
        <div class="index_title">
          <!--奖项名称-->
          <img src="../../images/jp-title1.png" v-if="prize.lever === 1">
          <img src="../../images/jp-title2.png" v-else-if="prize.lever === 2">
          <img src="../../images/jp-title3.png" v-else-if="prize.lever === 3">
        </div>
        <div class="index_jp">
          <!--奖品图片-->
          <img src="../../images/jp-bg1.png"  v-if="prize.lever === 1">
          <img src="../../images/jp-bg2.png"  v-else-if="prize.lever === 2">
          <img src="../../images/jp-bg3.png"  v-else-if="prize.lever === 3">
        </div>
        <div class="receive_btn" @click="goinfo()">
          <img src="../../images/yes-lq.png">
        </div>
      </div>
      <maskForm v-if="infoflag"></maskForm>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min'
  import maskForm from 'src/components/mask/maskform'

  export default {
    data(){
      return{
        infoflag:false,
        prize:{
          lever:this.$route.query.id
        }
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    components:{
      maskForm
    },
    methods:{
      goinfo(){
        this.infoflag=true;
      }
    }
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
  .index_warp{
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;padding: 1.25rem;
  }
  .index_title{
    width: 11rem;margin: .8rem auto 0;
    img{
      width: 100%;
    }
  }
  .index_logo{
    width: 40%;
    img{
      width: 100%;
    }
  }
  /*顶部右侧链接*/
  .r{
    position: absolute;right: 1.25rem;top: 1.25rem;
    a{
      font-size: 12px;color: #fff;display: block;border: 1px solid #fff;padding: 0 5px;border-radius:40%;
    }
  }
  .qqx{
    position: absolute;right: 1.25rem;top: 1.75rem;width: 2.5rem;
    img{
      width: 100%;
    }
  }
  .index_jp{
    width: 80%;margin:.5rem auto ;text-align: center;position: relative;
    img{
      width: 100%;
    }
    .time{
      position: absolute;top: 1rem;left: 0;right: 0;margin: auto;text-align: center;font-size: 10px;color: #ff0000;
    }
    .type{
      position: absolute;top: 2rem;left: 0;right: 0;margin: auto;text-align: center;font-size: 14px;font-weight: 600;color: #ff0000;
    }
    .spo{
      width: 80%;text-align: center;position: absolute;top: 3.5rem;left: 0;right: 0;margin: auto;
      img{
        width: 100%;
      }
    }
  }
  .receive_btn{
    width: 6rem;margin: 0 auto;
    img{
      width:100%;
    }
  }
</style>
