<template>
  <div>
    <div class="warp">
      <img src="../../images/load-bg.jpg" alt="" class="bg">
      <div class="center">
        <img src="../../images/timg.png" alt="" class="timg jump">
        <div class="load-warp">
          <span>Loading...</span>
          <div class="load-bar">
            <div class="load-num" :style="'width:' + num + '%'"></div>
          </div>
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
        isFlag:true,
        num:0
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
      let t=setInterval(_ => {
        if(that.num < 100) {
          that.num+=10;
          console.log(that.num)
        } else {
          clearInterval(t);
          this.$router.push('/index')
        }
      }, 300);
    },
    components:{

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  /*加载页*/
  .warp-sm{
    position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index: -1;
    .bg{
      width: 100%;height: 100%;
    }
  }
  .center{
    width: 11.2rem;
    position: absolute;top: 9.5rem;left: 0;right: 0;bottom: 0;margin: auto;z-index: 1;text-align: center;
    .timg{
      width: 3.6rem;display: block;margin: 0 auto 2rem;
    }
    .load-warp{
      text-align: center;padding-left: 1.8rem;
      span{
        font-size: 2rem;color: #fff;
      }
      .load-bar{
        margin: .5rem 0 0 0.3rem;
        width: 7rem;height: 0.9rem;border: 2px solid #fff;border-radius:.3rem;overflow: hidden;
        .load-num{
          width: 0;height: 100%;background-color: #82c126;
        }
      }
    }
  }
</style>
