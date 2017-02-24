<template>
    <div class="test">
        <button class="tst-btn" type="button" @click="goTo('Test')">返回</button>
        <button class="tst-btn" type="button" @click="request('Test')">请求数据</button>
        <code>
        {{result}}
    </code>
        <mt-tabbar>
            <mt-tab-item id="外卖">
                <router-link to='home'>
                    外卖
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="订单">
                订单2
            </mt-tab-item>
            <mt-tab-item id="发现">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import request from 'superagent';
    export default {
        name: 'test',
        data() {
            return {
                msg: 'test router animation',
                result: {
                    anme: 11
                }
            }
        },
        methods: {
            goTo: function (path) {
                this.$router.go(-1)
            },
            request: function () {
                var vm = this;
                alert('{{getTokenApi}}');
                request
                    .post('{{getTokenApi}}')
                    .query({
                        action: 'edit',
                        city: 'London'
                    }) // query string
                    .end(function (err, res) {
                        alert(JSON.stringify(res.body));
                        vm.result = res.body;
                    });
            }
        },
        created() {

        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test {
        background: rgba(255, 0, 0, 0.23);
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
