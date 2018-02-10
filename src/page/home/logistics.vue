<template>
  <div>
    <div class="main-show">
      <div class="title">
        订单详情
      </div>
      <div class="banner">
        <img src="../../images/zuqiu.png">
      </div>
      <ul class="person_info">
        <li>
          <em>收货人姓名：</em><span>刘萌萌</span>
        </li>
        <li>
          <em>收货人联系电话：</em><span>13689752465</span>
        </li>
        <li>
          <em>收货人地址：</em><span>北京市海淀区西单商场8号</span>
        </li>
        <li>
          <em>物流信息：</em><span>申通快递<i>13654789523</i></span>
        </li>
      </ul>
      <div class="garphical-list">
        <div class="list">
          <div class="l"><div class="wq"></div></div>
          <div class="r">
            <p>您的订单已出库，交由申通快递，单号：0123654796</p>
            <span>2016-07-12&nbsp;&nbsp;13:30:32</span>
          </div>
        </div>
        <div class="list">
          <div class="l"></div>
          <div class="r">
            <p>您的订单已出库，准备出库。</p>
            <span>2016-07-12&nbsp;&nbsp;13:30:32</span>
          </div>
        </div>
        <div class="list">
          <div class="l"></div>
          <div class="r">
            <p>您的订单已出库，准备出库。</p>
            <span>2016-07-12&nbsp;&nbsp;13:30:32</span>
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
  .main-show {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #fff;
  }
  .main-show .title {
    width: 100%;
    height: 3rem;
    line-height: 4rem;
    text-align: center;
    font-size: .75rem;
    color: #fff;
    background-color: #0c4295;
  }
  .main-show .banner {
    width: 100%;
    height: 7rem;
    text-align: center;
    position: relative;
  }
  .main-show .banner img {
    width: 5rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .main-show .person_info {
    width: 100%;
  }
  .main-show .person_info li {
    width: 100%;
    min-height: 1.8rem;
    padding-left: 2rem;
    border-top: 1px solid #eee;
    font-size: .7rem;
    position: relative;
    line-height: 1.8rem;
  }
  .main-show .person_info li em {
    font-style: normal;
    color: #737373;
    margin-right: .5rem;
  }
  .main-show .person_info li span {
    color: #737373;
  }
  .main-show .person_info li span i {
    font-style: normal;
    color: #ec6941;
    margin-left: .2rem;
  }
  .main-show .person_info li:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 70%;
    left: 1.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #0c4295;
  }
  .main-show .garphical-list {
    border-top: 1px solid #0c4295;
    padding: 1rem 7.5% ;
  }
  .main-show .garphical-list .list {
    width: 100%;display: flex;
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: .5rem;
  }
  .main-show .garphical-list .list .l {
    width: .5rem;
    height: .5rem;
    border-radius: 1rem;
    background-color: #ccc;
    position: absolute;
    left: .2rem;
    top: .2rem;
  }
  .main-show .garphical-list .list .l:after {
    content: "";
    width: 1px;
    height: 3rem;
    background-color: #ccc;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3rem;
    margin: auto;
  }
  .main-show .garphical-list .list .r p {
    font-size: 12px;
  }
  .main-show .garphical-list .list .r span {
    color: #999;
  }
  .main-show .garphical-list .list:nth-child(1) .l {
    background-color: #004f8e;
  }
  .main-show .garphical-list .list:nth-child(1) .l .wq {
    width: .8rem;
    height: .8rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    position: absolute;
    left: -0.15rem;
    top: -0.15rem;
  }

</style>
