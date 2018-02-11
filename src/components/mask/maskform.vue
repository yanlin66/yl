<template>
  <div>
    <div class="sh-info" id="maskForm">
      <div class="content">
        <h1>收货信息</h1>
        <h5>请认真填写您的信息，订单提交后不能再次更改</h5>
        <label>
          <span>收货人姓名 </span>
          <input type="text">
        </label>
        <label class="active">
          <span>收货手机号 </span>
          <input type="tel" maxlength="11" id="phone3"><i class="yzm">获取验证码</i>
        </label>
        <label>
          <span>输入验证码 </span>
          <input type="tel" maxlength="6">
        </label>
        <label>
          <span>收货人地址 </span>
          <input type="text" placeholder="请选择城市" id="ssx">
        </label>
        <label class="clear">
          <textarea id="detaild" cols="30" rows="10" placeholder="详细地址（省市无需再次输入）"></textarea>
        </label>
        <button id="yes-queren" @click="check()"><img src="../../images/yes-queren.png"></button>
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
      check(){
        this.$router.push('/prize')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sh-info{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);
    .content{
      width: 13rem;height: 70%;border-radius: 10px;
      position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;
      background-position: center;background-repeat: no-repeat;background-size: cover;padding: 1.8rem .9rem;background-image: url(../../images/jp-bg.png);
      h1{
        text-align: center;font-size: 1.2rem;color: #004f8e;margin: .3rem auto;
      }
      h5{
        text-align: center;font-size: 10px;color: #ff0000;margin-bottom: .8rem;
      }
      label{
        display: block;width: 100%;position: relative;margin-bottom: .5rem;font-size: 12px;
        span{
          display: block;width: 35%;height: 1rem;
        }
        input{
          border:1px solid #eaeaea;position: absolute;left: 35%;top: 0;width: 65%;height: 1rem;border-radius: 2px;padding-left: 2px;font-size: 12px;
        }
        #detaild{
          float:right;border:1px solid #eaeaea;width: 65%;max-height: 4rem;
          overflow-y: scroll;-webkit-overflow-scrolling:touch;
          overflow-scrolling:touch;font-size: 10px;padding: 2px;
        }
      }
      button{
        display: block;background-color: transparent;
        width: 6rem;margin:1rem  auto 0;
        img{
          width: 100%;
        }
      }
      .active{
        input{
          width: 35%;
        }
        .yzm{
          width: 28%;background-color:#004f8e;color: #fff;position: absolute;right: 0;top: 0;font-size: 10px;text-align: center;font-style: normal;height: 1rem;line-height: 1rem;border-radius: 2px;
        }
      }
    }
  }
</style>
