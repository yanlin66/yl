<template>
  <div>
    <div class="warp" id="add-info">
      <img src="../../images/baoming.jpg" class="bg_center">
      <div class="info_add">
        <div class="flex">
          <label class="type-1">
            宝贝姓名：<input type="text"  v-model="person.cname">
          </label>
          <label class="type-2">
            宝贝性别：
            <select name="sex"  v-model="person.sex">
              <option :value="sg.sex" v-for="sg in sexData" :key="sg.id">{{sg.sex}}</option>
            </select>
          </label>
        </div>
        <div class="flex">
          <label class="type-3">
            宝贝年龄：
            <select name="age" v-model="person.age">
              <option :value="ag.age" v-for="ag in ageData" :key="ag.id">{{ag.age}}</option>
            </select>
          </label>
          <label class="type-2">
            监护人姓名：<input type="text" v-model="person.jname">
          </label>
        </div>
        <label class="type_two">
          <em>宝贝身份证号：</em><input type="text" maxlength="18"  v-model="person.sfz">
        </label>
        <label class="yzm_warp clear">
          <em>监护人手机号：</em><input type="tel" maxlength="11" class="phone1"  v-model="person.tel"><span class="yzm">获取验证码</span>
        </label>
        <label class="type_two">
          <em>请输入验证码：</em><input type="text" maxlength="6"  v-model="person.yzm">
        </label>
        <label class="type_two">
          <em>应急手机号：</em><input type="tel" maxlength="11" class="phone2"  v-model="person.ytel">
        </label>
        <div class="city">
          宝贝的选择是:<span>{{person.city}}，{{person.time}}，{{person.type}}活动</span>
        </div>
        <button class="submit-btn" @click="formto()"></button>
      </div>
      <div v-if="yesflag">
        <maskSucess></maskSucess>
      </div>
      <maskError ref="child" @click="closeTip" :text1="text1" :text2="text2" :text3="text3"></maskError>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'
  import maskError from 'src/components/mask/error'
  import maskSucess from 'src/components/mask/sucess'

  export default {
    data(){
      return{
        text1:'',
        text2:'',
        text3:'',
        person:{
          cname:'',sex:'', age:'', jname:'', sfz:'', yzm:'', ytel:'', tel:'',
          city:sessionStorage.getItem('city'),
          time:sessionStorage.getItem('time'),
          type:sessionStorage.getItem('type'),
        },
        ageData:[
          {'id':1,'age':'7-8岁'},{'id':2,'age':'8-9岁'},{'id':3,'age':'9-10岁'},{'id':4,'age':'10-11岁'},{'id':5,'age':'11-12岁'},{'id':6,'age':'12-14岁'}
        ],
        sexData:[
          {'id':1,'sex':'男'},{'id':2,'sex':'女'}
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
      maskError,maskSucess
    },
    methods:{
      closeTip(){
        this.$refs.child.callMethod()
      },
      goindex(){
        this.$router.push('/index')
      },
      formto(){
        let that=this;
        if(!that.person.cname || !that.person.sex || !that.person.age || !that.person.jname){
          that.text1='信息不完整';
          that.text2='请重新选择';
          that.text3='继续填写信息';
          $(".mask_error").fadeIn();
          return false;
        }
        if(!that.person.yzm ){
          that.text1='验证码未输入';
          that.text2='请重新输入';
          that.text3='继续填写信息';
          $(".mask_error").fadeIn();
          return false;
        }
        if(!that.person.sfz){
          that.text1='您还未输入';
          that.text2='宝贝身份证号';
          that.text3='请重新填写';
          $(".mask_error").fadeIn();
          return false;
        }
        if(!that.person.tel){
          that.text1='您还未输入';
          that.text2='监护人手机号码';
          that.text3='请重新填写';
          $(".mask_error").fadeIn();
          return false;
        }else{
          let myreg=/^1[0-9]{10}$/;
          if (!myreg.test(that.person.tel)) {
            that.text1='监护人手机号码';
            that.text2='格式有误';
            that.text3='请重新填写';
            $(".mask_error").fadeIn();
            return false;
          }
        }
        if(!that.person.ytel){
          that.text1='您还未输入';
          that.text2='应急手机号码';
          that.text3='请重新填写';
          $(".mask_error").fadeIn();
          return false;
        }else{
          let myreg=/^1[0-9]{10}$/;
          if (!myreg.test(that.person.ytel)) {
            that.text1='应急手机号码';
            that.text2='格式有误';
            that.text3='请重新填写';
            $(".mask_error").fadeIn();
            return false;
          }
        }
        //ajax信息提交
        //成功提示弹窗
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
        border-radius: 2px;width: 68.5%;border: 1px solid #eaeaea;float: right;font-size: 12px;
        height: 1rem;
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
