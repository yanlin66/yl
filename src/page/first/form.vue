<template>
  <div>
    <div class="warp" id="add-info">
      <img src="../../images/baoming.jpg" class="bg_center">
      <div class="info_add">
        <div class="flex">
          <label class="type-1">
            宝贝姓名：<input type="text">
          </label>
          <label class="type-2">
            宝贝性别：
            <select name="sex">
              <option value="sg.sex" v-for="sg in sexData" :key="sg.id">{{sg.sex}}</option>
            </select>
          </label>
        </div>
        <div class="flex">
          <label class="type-3">
            宝贝年龄：
            <select name="age">
              <option value="ag.age" v-for="ag in ageData" :key="ag.id">{{ag.age}}</option>
            </select>
          </label>
          <label class="type-2">
            监护人姓名：<input type="text">
          </label>
        </div>
        <label class="type_two">
          <em>宝贝身份证号：</em><input type="text" maxlength="18" id="personid">
        </label>
        <label class="yzm_warp clear">
          <em>监护人手机号：</em><input type="tel" maxlength="11" class="phone1"><span class="yzm">获取验证码</span>
        </label>
        <label class="type_two">
          <em>请输入验证码：</em><input type="text" maxlength="6">
        </label>
        <label class="type_two">
          <em>应急手机号：</em><input type="tel" maxlength="11" class="phone2">
        </label>
        <div class="city">
          宝贝的选择是:<span>北京，2017年07月16日，上午场活动</span>
        </div>
        <button class="submit-btn" @click="formto()"></button>
      </div>
      <div v-if="yesflag">
        <!--提交成功-->
        <maskSucess></maskSucess>
      </div>
      <div v-if="noflag">
        <!--错误提示信息-->
        <maskNo></maskNo>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'
  import maskNo from 'src/components/mask/wrong'
  import maskSucess from 'src/components/mask/sucess'

  export default {
    data(){
      return{
        ageData:[
          {'id':0,'age':''},{'id':1,'age':'7-8岁'},{'id':2,'age':'8-9岁'},{'id':3,'age':'9-10岁'},{'id':4,'age':'10-11岁'},{'id':5,'age':'11-12岁'},{'id':6,'age':'12-14岁'}
        ],
        sexData:[
          {'id':0,'sex':''},{'id':1,'sex':'男'},{'id':2,'sex':'女'}
        ],
        yesflag:false,
        noflag:false
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    components:{
      maskNo,maskSucess
    },
    methods:{
      goindex(){
        this.$router.push('/index')
      },
      formto(){
        let that=this;
        that.yesflag=true
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*资料添加*/
  .info_add{
    width: 85%;margin:.48rem auto;position: relative;
    label{
      margin-bottom: .6rem;font-size: 12px;display: block;height:1rem;line-height: 1rem;
      input{
        border-radius: 2px;width: 68.5%;border: 1px solid #eaeaea;float: right;
      }
      select{
        border-radius: 2px;
      }
      em{
        float: left;min-width: 31%;font-style: normal;
      }
    }
    .type_two{
      width: 100%;
      position: relative;
      input{
        position: absolute;left: 31%;
      }
    }
    .flex{
      display: flex;font-size: 12px;
      .type-1{
        width: 47.5%;
        input{
          display: inline-block;width:50%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;
        }
      }
      .type-2{
        width: 47.5%;margin-left: 5%;font-size: 12px;position: relative;
        input{
          display: inline-block;width: 50%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;position: absolute;right:0;
        }
        select{
          display: inline-block;width: 50%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;float: right;padding-right: .2rem;position: absolute;right:0;
        }
      }
      .type-3{
        width: 47.5%;font-size: 12px;position: relative;
        input{
          display: inline-block;width: 50%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;position: absolute;right:0;
        }
        select{
          display: inline-block;width: 50%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;float: right;padding-right: .2rem;position: absolute;right:0;
        }
      }
    }
    .yzm_warp{
      display: block;width: 100%;position: relative;
      i{
        float: left;font-style: normal;
      }
      input{
        display: inline-block;width:40%;height:1rem;border: 1px solid #eaeaea;font-size: 12px;float: left;
      }
      .yzm{
        min-width: 24%;text-align: center;
        position: absolute;right: 0;line-height:1rem;background-color: #004f8e;color: #fff;border-radius: 2px;font-size: 10px;padding: 0 .2rem;
      }
    }
    .city{
      font-size: 10px;
      span{
        color: #666;margin-left: .48rem;
      }
      .r{
        float: right;
      }
    }
    .submit-btn{
      display: block;
      width: 7rem;height: 2rem;background-position: center;background-repeat: no-repeat;background-size: contain;
      background-color: rgba(255,255,255,0);position: absolute;bottom: -2.8rem;left: 0;right: 0;margin: auto;
      background-image: url(../../images/submit_btn.png)
    }
  }
</style>
