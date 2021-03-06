// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import 'bootstrap-datepicker';
import 'bootstrap-timepicker';
import Vue from 'vue';
import App from './App';
import router from './router';
import Toasted from 'vue-toasted';
import VueLodash from 'vue-lodash';
import moment from 'moment';
import VueSweetalert from 'vue-sweetalert2';
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);
import DatatableFactory from 'vuejs-datatable/dist/vuejs-datatable.esm.js';
Vue.use(DatatableFactory);
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LLL');
  }
});

Vue.filter('formatDateWithoutTime', function (value) {
  if (value) {
    return moment(String(value)).format('LL');
  }
});
Vue.config.productionTip = false;
//global variable
Vue.mixin({
  data() {
    return {
      get globalUrl() {
        return "https://command-center-apis.herokuapp.com";
      }
    };
  }
});

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
};

Vue.use(VueSweetalert, options);
Vue.use(Toasted, {
  theme: "toasted-primary",
  position: "top-right",
  iconPack: 'fontawesome',
  closeHtml: "check",
  showCloseButton: true,
  duration: 15000
});
Vue.use(VueLodash);
/* eslint-disable no-new */
//check  login
// router.beforeEach((to, from, next) => {
//   if (to.path != '/login') {
//     let username = localStorage.getItem("username");
//     if (Vue._.isEmpty(username)) {
//       return next('/login');
//     }
//   }
//   next();
// });
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  created() {
    this.globalUrl = "This won't change it";
  }
});
