<template>
  <div class="test">
        <button class="tst-btn"type="button" @click="goTo('Test')">跳转到test</button>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'test router animation',
      }
    },
    methods: {
       goTo: function (path) {
        this.$router.push(path)
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
    background: rgba(0, 0, 255, 0.19);
}
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  .tst-btn {
      background: gray;
      width: 200px;
      height: 50px;
  }

</style>
