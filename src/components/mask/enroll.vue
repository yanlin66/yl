<template>
  <div class="mask_enroll" id="maskEnroll">
    <div class="mask_content">
      <img src="../../images/notes.png">
      <div class="mask_con">
        <div class="top">
          <label>
            <span>活动城市</span>
            <select name="city">
              <option value="cd.id" v-for="cd in cityData" :key="cd.id">{{cd.name}}</option>
            </select>
          </label>
          <label>
            <span>宝贝年龄</span>
            <select name="age">
              <option value="ag.age" v-for="ag in ageData" :key="ag.id">{{ag.age}}</option>
            </select>
          </label>
          <label>
            <span>活动日期</span>
            <select name="time">
              <option value="tg.time" v-for="tg in timeData" :key="tg.id">{{tg.time}}</option>
            </select>
          </label>
          <label>
            <span>活动场次</span>
            <select name="type">
              <option value="pg.type" v-for="pg in typeData" :key="pg.id">{{pg.type}}</option>
            </select>
          </label>
          <label class="active">
            <span>手机号码</span><input type="tel" maxlength="11">
          </label>
          <button class="bm_btn" @click="toform()"></button>
        </div>
        <div class="bottom">
          <h1>-活动规则-</h1>
          <p>尊敬的家长您好：<br>
            &nbsp;&nbsp;感谢您报名“qq星训练营”，我们将倾全营之力为孩子的训练提供优质的服务！为了让您的孩子度过一个安全、快乐的营期，请仔细阅读“活动规则”！ 当您报名时，就表示你本次已愿意和我们按照“活动规则”达成一致协议。
          </p>
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
        cityData:[
          {'id':1,'name':'北京市'},{'id':2,'name':'上海市'},{'id':3,'name':'深圳市'},{'id':4,'name':'青岛市'}
          ],
        ageData:[
          {'id':1,'age':'7-8岁'},{'id':2,'age':'8-9岁'},{'id':3,'age':'9-10岁'},{'id':4,'age':'10-11岁'},{'id':5,'age':'11-12岁'},{'id':6,'age':'12-14岁'}
        ],
        timeData:[
          {'id':1,'time':'2017/07/16'},{'id':2,'time':'2017/07/17'},{'id':3,'time':'2017/07/18'},{'id':4,'time':'2017/07/19'},{'id':5,'time':'2017/07/20'}
        ],
        typeData:[
          {'id':1,'type':'上午场'},{'id':2,'type':'下午场'},
        ]
      }
    },
    mounted(){

    },
    methods: {
      toform(){
        this.$router.push({ path:'/firstthree'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .mask_enroll{
    position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 99;background-color: rgba(0,0,0,.6);
    .mask_content{
      margin: 40% auto 0;text-align: center;position: relative;
      img{
        width: 80%;
      }
      .mask_con{
        width: 64%;height: 45%;
        position: absolute;top: 35%;left: 0;right: 0;margin: auto;
        .top{
          height: 50%;width: 100%;font-size: 10px;color: #666;
          label{
            display: block;float: left;width: 49%;position: relative;text-align: left;margin-bottom: .3rem;margin-right: 1%;
            span{
              width: 35%;line-height: .9rem;
            }
            select{
              width: 58%;font-size: 10px;border: 1px solid #eaeaea;border-radius: 2px;
              position: absolute;right: 0;padding-left: .1rem;height: .9rem;
            }
          }
          .active{
            display: block;float: left;width: 100%;position: relative;text-align: left;
            span{
              width: 17.5%;
            }
            input{
              width: 79%;font-size: 10px;border: 1px solid #eaeaea;
              position: absolute;right: 0;border-radius: 2px;height: .9rem;
            }
          }
        }
        .bottom{
          height: 50%;width: 100%;border: 1px solid #eaeaea;border-radius: 5px;padding: .2rem;position: relative;
          overflow-y: scroll;
          -webkit-overflow-scrolling:touch;
          overflow-scrolling:touch;
          h1{
            font-size: 14px;
          }
          p{
            text-align: left;font-size: 10px;
          }
        }
        .check_btn{
          .radio{
            position: absolute;bottom: -13px;left: 15%;width:10px;height: 10px;border: 1px solid #eaeaea;
            text-align: center;font-size: 8px;line-height: 10px;
          }
        }
        .bm_btn{
          width: 40%;background-color: transparent;
          position: absolute;bottom: -40%;left: 0;right: 0;height:2rem;margin: auto;
        }
      }
    }
  }
</style>
