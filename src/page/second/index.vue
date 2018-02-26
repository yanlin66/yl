<template>
  <div>
    <div class="warp-two">
      <img src="../../images/index-bg.jpg" class="bg">
      <div class="index_warp clear">
        <div class="index_logo">
          <img src="../../images/index_logo.png">
        </div>
        <div class="r">
          <a href="javascript:;" class="rule" @click="showrule()">活动规则</a>
        </div>
        <div class="index_title">
          <img src="../../images/kaijiang.png">
        </div>
        <!--倒计时器-->
        <div class="count-down">
          <div class="count-warp">
            <div class="count-show clear">
              <span id="t_h">{{th}}</span><span id="t_m">{{tm}}</span><span id="t_s">{{ts}}</span>
            </div>
          </div>
        </div>
        <div class="prize_info">
          <div class="prize_inwarp">
            <div class="title">
              <img src="../../images/prize_in.png">
            </div>
            <div class="inwarp_one">
              <div class="infp">7月15日12点</div>
              <div class="infp">恭喜176xxxx1452</div>
              <div class="infp">获得皇马官方球衣一件</div>
            </div>
            <div class="inwarp_two">
              <label>
                <input type="tel" maxlength="11" placeholder="请输入手机号码" id="phone">
              </label>
            </div>
            <div class="btn_warp clear">
              <a href="javascript:;" @click="selecttel()">
                <div class="r_btn">
                  <img src="../../images/r_btn.png">
                </div>
              </a>
              <a href="javascript:;" @click="tjtel()">
                <div class="l_btn">
                  <img src="../../images/l_btn.png">
                </div>
              </a>
            </div>
            <div class="p_img li-1"><img src="../../images/li-3.png"></div>
            <div class="p_img li-2"><img src="../../images/li-2.png"></div>
            <div class="p_img li-3"><img src="../../images/li-1.png"></div>
          </div>
        </div>
      </div>
      <!--提示信息-->
      <maskError  ref="child" @click="closeTip" :text1="text1" :text2="text2" :text3="text3"></maskError>
      <!--活动规则-->
      <maskRule ref="child" @click="rule"></maskRule>
      <!--提交成功-->
      <maskYes v-if="yesflag"></maskYes>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min'
  import maskRule from 'src/components/mask/rule'
  import maskError from 'src/components/mask/error'
  import maskYes from  'src/components/mask/yes'

  export default {
    data(){
      return{
        //错误信息
        text1:'',
        text2:'',
        text3:'',

        th:'00',
        tm:'00',
        ts:'00',
        yesflag:false,
        num:0,
        prizestatus:-1,
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
      let now = new Date(),hour = now.getHours()
      //设置下一时间
      let next=parseInt(hour)+1;
      let times = '2018-02-26 '+next+':00:00';
      //console.log(tim2);
      //计时器
      setInterval(_=> {
        let EndTime = new Date(Date.parse(times.replace(/-/g, "/"))); //截止时间
        let NowTime = new Date();
        let t = EndTime.getTime() - NowTime.getTime();
        let h = Math.floor(t / 1000 / 60 / 60 % 24);
        let m = Math.floor(t / 1000 / 60 % 60);
        let s = Math.floor(t / 1000 % 60);
        if (t <= 0) {
          that.th = 0 + "0";
          that.tm = 0 + "0";
          that.ts = 0 + "0";
        } else {
          that.th = h + "";
          that.tm = m + "";
          that.ts = s + "";
          if (h < 10) {
            that.th = "0" + h;
          }
          if (m < 10) {
            that.tm = "0" + m;
          }
          if (s < 10) {
            that.ts = "0" + s;
          }
        }
      }, 1000)
    },
    components:{
      maskRule,maskError,maskYes
    },
    methods:{
      showrule(){
        $(".mask_rule").fadeIn();
      },
      rule (){
        this.$refs.child.callMethod() // 方法2
      },
      closeTip(){
        this.$refs.child.callMethod()
      },
      tjtel(){
        if(!$("#phone").val()){
          this.text1='手机号未填写';
          this.text2='请重新输入';
          this.text3='赶快输入吧';
          $(".mask_error").fadeIn();
        }else{
          this.yesflag=true;
        }
      },
      selecttel(){
        if(!$("#phone").val()){
          this.text1='手机号未填写';
          this.text2='请重新输入';
          this.text3='赶快输入吧';
          $(".mask_error").fadeIn();
        }else{
          //状态值为-1为未开奖 0为未中 1为一等奖 2为2等奖 3为3等奖
          let that=this;
          that.prizestatus=2;
          switch (that.prizestatus){
            case -1:
              this.$router.push({ path:'/whyprize'});
              break;
            case 0:
              this.$router.push({ path:'/noprize'});
              break;
            case 1:
              this.$router.push({ path:'/winning',query:{id:1}});
              break;
            case 2:
              this.$router.push({ path:'/winning',query:{id:2}});
              break;
            case 3:
              this.$router.push({ path:'/winning',query:{id:3}});
              break;
            default:
              return false;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*第二个活动*/
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
  .warp-two .index_warp {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 1.25rem;
  }
  .warp-two .index_warp .index_logo {
    width: 40%;
  }
  .warp-two .index_warp .index_logo img {
    width: 100%;
  }
  .warp-two .index_warp .r {
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
  }
  .warp-two .index_warp .r a {
    font-size: 12px;
    color: #fff;
    display: block;
    border: 1px solid #fff;
    padding: 0 5px;
    border-radius: 40%;
  }
  .warp-two .index_warp .qqx {
    position: absolute;
    right: 1.25rem;
    top: 1.75rem;
    width: 2.5rem;
  }
  .warp-two .index_warp .qqx img {
    width: 100%;
  }
  .warp-two .index_warp .index_title {
    width: 11rem;
    margin: .8rem auto 0;
  }
  .warp-two .index_warp .index_title img {
    width: 100%;
  }
  .warp-two .index_warp .count-down {
    width: 15rem;
    height: 5rem;
    margin: .8rem auto 0;
    text-align: center;
    padding-left: 1.3%;
  }
  .warp-two .index_warp .count-down .count-warp {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .warp-two .index_warp .count-down .count-warp .count-show {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 2.8rem;
    text-align: center;
    color: #fff;
    font-weight: 600;
  }
  .warp-two .index_warp .count-down .count-warp .count-show span {
    display: block;
    float: left;
    padding-top: .4rem;
    line-height: 5rem;
    margin-left: 1.7%;
    margin-right: 1.6%;
    width: 30%;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  #t_h{
    background-image: url(../../images/t_h.png);
  }
  #t_m{
    background-image: url(../../images/t_m.png);
  }
  #t_s{
    background-image: url(../../images/t_s.png);
  }
  .warp-two .index_warp .prize_info {
    width: 13rem;
    margin: 1rem auto 0;
    padding: .3rem;
    border-radius: 10px;
    background-color: #fff;
  }
  .warp-two .index_warp .prize_info .prize_inwarp {
    width: 100%;
    height: 100%;
    padding: .3rem;
    border-radius: 10px;
    border: .3rem solid #12538f;
    position: relative;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .p_img {
    width: 2rem;
    position: absolute;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .p_img img {
    width: 100%;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .li-1 {
    left: .3rem;
    top: 1rem;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .li-2 {
    right: .3rem;
    top: 1rem;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .li-3 {
    right: .3rem;
    top: 6rem;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .title {
    width: 52%;
    margin: 0 auto;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .title img {
    width: 100%;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_one {
    width: 60%;
    margin: .6rem auto 0;
    border: 2px solid #ebebeb;
    padding: .3rem 0;
    height: 3rem;
    overflow: hidden;
    position: relative;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_one .inwarp_scroll{
    width: 100%;height: auto;
    position:absolute;
    left: 0;
    top:0;
    padding-top: .3rem;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_one .infp {
    font-size: .6rem;
    color: #d03737;
    text-align: center;
    min-height: .8rem;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_two {
    width: 60%;
    height: 1rem;
    margin: .3rem auto 0;
    border-radius: 5px;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_two label {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: block;
    background-color: #e1e1e1;
    border: 2px solid #cecece;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .inwarp_two label input {
    width: 100%;
    height: 100%;
    display: block;
    font-size: .6rem;
    text-align: center;
    border-radius: 5px;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .btn_warp {
    width: 70%;
    margin: .5rem auto 0;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .btn_warp .l_btn {
    width: 45%;
    float: left; ;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .btn_warp .l_btn img {
    width: 100%;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .btn_warp .r_btn {
    width: 45%;
    float: right;
  }
  .warp-two .index_warp .prize_info .prize_inwarp .btn_warp .r_btn img {
    width: 100%;
  }
  .warp-two .index_warp .index_jp {
    width: 80%;
    margin: .5rem auto ;
    text-align: center;
    position: relative;
  }
  .warp-two .index_warp .index_jp img {
    width: 100%;
  }
  .warp-two .index_warp .index_jp .time {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 10px;
    color: #ff0000;
  }
  .warp-two .index_warp .index_jp .type {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #ff0000;
  }
  .warp-two .index_warp .index_jp .spo {
    width: 80%;
    text-align: center;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  .warp-two .index_warp .index_jp .spo img {
    width: 100%;
  }
  .warp-two .index_warp .receive_btn {
    width: 6rem;
    margin: 0 auto;
  }
  .warp-two .index_warp .receive_btn img {
    width: 100%;
  }
  .warp-two .mask_yes {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
  }
  .warp-two .mask_yes .mask_content {
    margin: 40% auto 0;
    text-align: center;
    position: relative;
  }
  .warp-two .mask_yes .mask-bg {
    width: 80%;
  }
  .warp-two .mask_yes .content {
    width: 10rem;
    height: 10rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .warp-two .mask_yes .content h1 {
    font-size: 1.2rem;
    text-align: center;
    color: #085592;
    margin-top: .5rem;
  }
  .warp-two .mask_yes .content .erweima {
    width: 70%;
    margin: 0 auto;
  }
  .warp-two .mask_yes .content .erweima img {
    width: 100%;
  }
  .warp-two .mask_yes .content h3 {
    font-size: 12px;
    text-align: center;
    color: #d03737;
    font-weight: 500;
  }
</style>
