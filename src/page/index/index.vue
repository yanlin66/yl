<template>
  <div>
    <div class="warp">
      <img src="../../images/index-bg.jpg" class="bg">
      <div class="index_warp clear">
        <div class="index_logo">
          <img src="../../images/index_logo.png">
        </div>
        <div class="r">
          <a class="prize"  @click = "goprize()">我的奖品</a>
          <a class="rule" @click = "maskrule()">活动规则</a>
          <a href="javascript:;" class="gz_active" @click = "gzactive()">关注活动</a>
          <div class="a-play">
            <img src="../../images/play.png" attrsrc="../../images/play-push.png" class="music">
          </div>
        </div>
        <div class="index_title">
          <img src="../../images/index_header.png">
        </div>
        <div class="index_person">
          <img src="../../images/five_person.png" class="huangdong">
          <div class="mike">
            <img src="../../images/milk.png">
          </div>
        </div>
        <div class="index_btn clear">
          <div class="l">
            <a href="javascript:;" @click="gosecond()"><img src="../../images/left_btn.png"></a>
          </div>
          <div class="rr">
            <a href="javascript:;" @click="gofirst()"><img src="../../images/right_btn.png"></a>
          </div>
        </div>
        <!--活动已结束
        <div class="close_active">
            <img src="../../images/close_active.png">
        </div>-->
      </div>
      <!--一天内已抽奖的提示-->
      <maskTs></maskTs>
      <!--活动规则-->
      <maskRule ref="child" @click="rule"></maskRule>
      <!--关注公众号-->
      <maskGz  ref="child" @click="gz"></maskGz>
    </div>
  </div>
</template>

<script>
  import maskRule from 'src/components/mask/rule'
  import maskTs from 'src/components/mask/repeat'
  import maskEnroll from 'src/components/mask/enroll'
  import maskGz from 'src/components/mask/gz'
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        gzflag:false,
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    components:{
      maskRule,maskTs,maskEnroll,maskGz
    },
    methods:{
      maskrule(){
        $(".mask_rule").fadeIn();
      },
      goprize(){
        this.$router.push('/prize')
      },
      gofirst(){
        this.$router.push('/firstone')
      },
      gosecond(){
        this.$router.push('/secondone')
      },
      rule (){
        this.$refs.child.callMethod() // 方法2
      },
      gz(){
        this.$refs.child.close();
      },
      gzactive(){
        $(".mask_gz").fadeIn();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  /*加载页*/
  .index_warp{
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;padding: 1.25rem;
    /*左侧LOGO*/
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
        font-size: 12px;color: #fff;display: block;
      }
      .a-play{
        position: absolute;bottom: -2rem;right: 0;width: 1.25rem;height: 1.25rem;
        img{
          width: 100%;
        }
      }
    }
    /*首页标题*/
    .index_title{
      width: 11rem;margin: .8rem auto 0;
      img{
        width: 100%;
      }
    }
    /*首页人物*/
    .index_person{
      margin: 0 auto;text-align: center;position: relative;
      img{
        width: 120%;position: relative;left: -10%;
      }
      .mike{
        width: 8rem;text-align: center;
        position: absolute;bottom: -2rem;left: 0;right: 0;margin: auto;
        img{
          width: 100%;left: 0;
        }
      }
    }
    /*底部按钮*/
    .index_btn{
      width:90% ;
      position: absolute;bottom:5%;left: 0;right: 0;margin: auto;text-align: center;padding: 0 1.5rem;
      .l{
        float: left;width: 6rem;
        img{
          width: 100%;
        }
      }
      .rr{
        float: right;width: 6rem;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
