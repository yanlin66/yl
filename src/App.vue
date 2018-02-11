<template>
	<div>
		<transition name="fold">
    		<router-view></router-view>
    	</transition>
    </div>
</template>

<script>
  	export default {

  	}
</script>

<style lang="scss">
  @import './style/common';
  .fold-enter-active {
    animation-name: fold-in;
    animation-duration: .5s;
  }
  .fold-leave-active {
    animation-name: fold-out;
    animation-duration: .5s;
  }
  @keyframes fold-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fold-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
