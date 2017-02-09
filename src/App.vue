<template>
  <div id="app">
    <transition name="fade">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        routeInfo: this.$route
      }
    },
    watch: {
      '$route': function(r) {
          console.log(r);
          this.routeInfo = r;
      }
    }
  }

</script>
<style>
  html,body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    height: 100%;
  }
  
  .router-view {
      height: 100%;
  }
  
  .fade-enter-active {
    animation: slide-in 0.1s ease-in;
    -webkit-animation: slide-in 0.1s ease-in;
  }
  
  .fade-leave-active {
    animation: slide-out 0.5s ease-out;
    -webkit-animation: slide-out 0.5s ease-out;
  }
  
  @keyframes slide-in {
    0% {
      transform: translateX(200%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    5% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

</style>
