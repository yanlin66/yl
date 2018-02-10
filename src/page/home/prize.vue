<template>
  <div>
    <div class="main">
      <div class="title">
        我的奖品
      </div>
      <div class="content">
        <div class="perize-list clear">
          <div class="left">
            <img src="../../images/clothes.png">
          </div>
          <div class="right">
            <div class="top">皇马官方球衣</div>
            <!--em的内容已经透明处理  不需要处理-->
            <div class="con"><em>2016.09.20  13：00</em></div>
            <div class="bottom">
              <a href="javascript:;" class="watch-show" @click="gologist()">查看</a>
            </div>
          </div>
        </div>
        <div class="perize-list clear">
          <div class="left">
            <img src="../../images/zuqiu.png">
          </div>
          <div class="right">
            <div class="top">皇马官方足球</div>
            <div class="con"><em>2016.09.20  13：00</em></div>
            <div class="bottom">
              <a href="javascript:;" class="watch-show" @click="gologist()">查看</a>
            </div>
          </div>
        </div>

        <div class="perize-list clear">
          <div class="left">
            <img src="../../images/jp-mike.png">
          </div>
          <div class="right">
            <div class="top">伊利16入纯牛奶</div>
            <div class="con"><em>2016.09.20  13：00</em></div>
            <div class="bottom">
              <a href="javascript:;" class="watch-show" @click="gologist()">查看</a>
            </div>
          </div>
        </div>

        <div class="perize-list clear">
          <div class="left">
            <img src="../../images/yhquan.png">
          </div>
          <div class="right">
            <div class="top">优惠券（长按复制）</div>
            <div class="con">
              <ul>
                <li>723013243500</li>
              </ul>
            </div>
            <div class="bottom">
              <a href="javascript:;" class="use-show">立即使用</a>
            </div>
          </div>
        </div>

        <div class="perize-list clear">
          <div class="left">
            <img src="../../images/lotter.png">
          </div>
          <div class="right">
            <div class="top">皇马训练营入场券</div>
            <div class="con">
              <div class="con-in clear"><i>您报名的是：</i><br><span>北京市</span><br><span>2017年7月16日</span><br><span>上午场活动</span><br></div>
              <div class="con-in clear"><i>咨询热线：</i><br><span>400-008-6080</span></div>
            </div>
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
      gologist(){
        this.$router.push('/logistics')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    background-color: #f6f6f6;position: absolute;left: 0;top: 0;width: 100%;height: 100%;
    overflow-y: auto;-webkit-overflow-scrolling: touch;
    .title{
      width: 100%;height: 3rem;line-height: 4rem;text-align: center;font-size: .75rem;color: #fff;background-color: #0c4295;
    }
    .content{
      width: 100%;padding: .4rem .6rem 2rem;background-color: #f6f6f6;
      .perize-list{
        border: 1px solid #0c4295;margin-bottom: .3rem;background-color: #fff;display: flex;align-items: center;
        .left{
          width: 50%;min-height: 6.4rem;background-color: #fff;
          position: relative;overflow: hidden;height: 100%;display: flex;justify-content: center;align-items: center;
          img{
            width: 75%;
          }
        }
        .right{
          width: 50%;min-height: 6.4rem;background-color: #eee;padding: .9rem;
          .top{
            width:100%;font-size: .75rem;color: #666;padding:0 0 .15rem;border-bottom: 1px solid #ff8339;
          }
          .con{
            font-size: 10px;margin: .2rem 0 0;
            em{
              opacity: 0;
            }
            ul{
              margin-top: .5rem;width: 60%;margin-bottom: -1rem;
              li{
                border: 1px dashed #ff8339;margin-bottom: .1rem;padding: 2px 2px;border-radius: 4px;text-align: center;
              }
            }
            .con-in{
              padding:.24rem .48rem;position: relative;margin-bottom: .2rem;font-size: 10px;
              i{
                position: absolute;left: 0;top: 0;color: #666;text-align: left;font-style: normal;padding: 0;font-size: 10px;
              }
              span{
                font-size: 10px;color: #0c4295;line-height: 1.41;
              }
            }

          }
          .bottom{
            margin-top: 1.5rem;
            span{
              color: #999;
            }
            .active{
              color: #ff8339;
            }
            a{
              display: block;width: 3rem;height: 1rem;text-align: center;line-height: 1rem;
              float: right;background-color: #0c4295;color: #fff;border-radius: 4px;font-size: 10px;
            }
          }
        }
      }
    }
  }
</style>
