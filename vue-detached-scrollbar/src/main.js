// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Appl from 'App';
import Foots from 'Footer';
// import {Wrapper} from 'vue-detached-scrollbar';
import scrollBus from 'vue-detached-scrollbar';

/* eslint-disable no-new */
const app = new Vue({
  data: {
    scrollBus,
  },
  el: '#app',
  template: '<div><appl/><span>Some random HTML code here</span><foots/></div>',
  components: {
    // Wrapper,
    Appl,
    Foots,
  },
});
