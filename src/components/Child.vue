<template>
  <div class="child">
      {{fullName}}
    <input type="text" v-model="fullName" ><span @click="sayHello">btn</span>
  </div>
</template>
<script>
  export default {
    name: 'child',

    data() {
        return {
            fullName:'zhang san '
        }
    },
    methods: {
        sayHello: function () {
            console.log('子元素调用被点击。。。。');
            this.$emit('say', {name:11})
            // this.$parent.greet();
        }
    }
  }

</script>