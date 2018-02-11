<template>
  <div>
    <div class="main-show">
      <div class="title">
        订单详情
      </div>
      <div class="banner">
        <div v-if="prize.level === '1'">
          <img src="../../images/clothes.png">
        </div>
        <div v-else-if="prize.level === '2'">
          <img src="../../images/zuqiu.png">
        </div>
        <div v-else-if="prize.level === '3'">
          <img src="../../images/jp-mike.png">
        </div>

      </div>
      <ul class="person_info">
        <li>
          <em>收货人姓名：</em><span>{{prize.name}}</span>
        </li>
        <li>
          <em>收货人联系电话：</em><span>{{prize.tel}}</span>
        </li>
        <li>
          <em>收货人地址：</em><span>{{prize.address}}</span>
        </li>
        <li>
          <em>物流信息：</em>
          <span>
            {{prize.logistics.lname}}
            <i>{{prize.logistics.ordernum}}</i>
          </span>
        </li>
      </ul>
      <div class="garphical-list">
        <div class="list" v-for="item in loginfo.process">
          <div class="l"><div class="wq"></div></div>
          <div class="r">
            <p>{{item.content}}</p>
            <span>{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        prize:{
          name:'张三',
          level:'2',
          tel:'13689752465',
          address:'北京市海淀区西单商场8号',
          logistics:{lname:'申通快递',ordernum:'S5100000365'}
        },
        loginfo:{
          ordernum:'S5100000365',
          process:[
            {content:'您的订单等待批示',time:'2017-07-10 13:30:32'},
            {content:'您的订单批示通过，等待物流上门取件',time:'2017-07-11 13:30:32'},
            {content:'您的订单已出库，交由申通快递',time:'2017-07-11 16:30:32'},
          ]
        }
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    methods:{

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
