<template>
  <div v-if="flag">
    <div class="mask_error" id="maskError">
      <div class="mask_content">
        <img src="../../images/ts-bg.png" class="mask-bg">
        <div class="content">
          <h1></h1>
          <p>{{text1}}<br>{{text2}}<br>{{text3}}</p>
          <div class="btn"  @click="closeTip">
            <img src="../../images/yes-btn.png">
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
        flag:true,
      }
    },
    props: ['text1','text2','text3'],
    methods: {
      closeTip(){
        this.flag=false;
        setTimeout(_ => {
          this.flag=true;
        }, 300);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask_error{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);display: none;
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
