<template>
  <div>

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
      },
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

</style>
