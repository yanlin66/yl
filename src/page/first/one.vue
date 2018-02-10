<template>
  <div>
    <div class="warp">
      <img src="../../images/act_bg.jpg" class="bg">
      <a href="javascript:;" class="skip" @click="gotwo()">
        <img src="../../images/begin-start.png" class="begin">
      </a>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        isFlag:true,
        num:0
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
    },
    components:{

    },
    methods:{
      gotwo(){
        this.$router.push({ path:'/firsttwo'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
