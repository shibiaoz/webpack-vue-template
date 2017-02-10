import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from 'components/Hello'
// import Test from 'components/Test'
Vue.use(VueRouter)
const Hello = resolve => require(['../components/Hello.vue'], resolve);
const Test = resolve => require(['../components/Test.vue'], resolve);
export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }]
})
