import Vue from 'vue';
import Router from 'vue-router';
import serverlists from '@/components/server_lists';
import dropletdetails from '@/components/droplet_details';
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
Vue.use(Router);
export default new Router({
  //mode: 'history',//this  is  for  remove #  from  url
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: serverlists,
      root:  '/'
    },
    {
      path: '/droplet-details/:id',
      name: 'droplet-details',
      component: dropletdetails,
      root:  '/'
    }
  ]
});
