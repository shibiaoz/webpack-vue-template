<template>
    <div class="test">
        <button class="tst-btn" type="button" @click="goTo('Test')">跳转到test</button>
        <parent>
            <child v-on:say="greet($event)"></child>
            <child v-on:say="greet($event)"></child>
        </parent>
    </div>
</template>
<script>
    import Parent from './Parent.vue'
    import Child from './Child.vue'
    import Test from './Test.vue'
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
            },
            greet: function (msg) {
                console.log('msg from child => ' + msg)
                console.dir(msg);
            }
        },
        components: {
            Parent,
            Child
        }
        
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
    .aa {
        .bb {
            color: red;
        }
    }
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
