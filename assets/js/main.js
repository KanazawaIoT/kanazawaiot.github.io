'use strict';

import Vue from 'vue';
import $ from 'jquery';
import VueRouter from 'vue-router';
import index from '../components/index.vue';
Vue.use(VueRouter);

var hogehoge = true;

// Routing Settings
// w
const router = new VueRouter({
  mode: 'history',
  routes: [
    // { path: '/user/:id', component: User,
    //  children: [
    //    { path: '', component: UserHome },
    //    { path: 'profile', component: UserProfile },
    //    { path: 'posts', component: TopPage }
    //  ]
    // },
    { path: '', component: index }
  ]
});

// vue Mount
const app = new Vue({
  router,
  template: '<div id="app"><router-view></router-view></div>',
  replace: true,
  data:{
  },
  methods:{
    echo(){
      // console.log(this.accessCheck.index);
    }
  },
  mounted(){
    this.echo();
  }
}).$mount('#app');

