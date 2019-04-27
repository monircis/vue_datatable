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
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL');
  }
});
Vue.filter('formatDateWithoutTime', function(value) {
  if (value) {
    return moment(String(value)).format('LL');
  }
});
Vue.config.productionTip = false;

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
};

Vue.use(VueSweetalert,options);
Vue.use(Toasted, {
  theme: "toasted-primary",
  position: "bottom-right",
  iconPack: 'fontawesome',
  closeHtml: "check",
  showCloseButton: true,
  duration : 1500
});
Vue.use(VueLodash);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
