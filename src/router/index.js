import Vue from 'vue';
import Router from 'vue-router';
import serverlists from '@/components/server_lists';
import dropletdetails from '@/components/droplet_details';
import newLinkedinProfile from '@/components/linkedin_profile_create';
import LinkedinProfileLists from '@/components/linkedin_profile_list';
import singleProfile from '@/components/single_Profile';
import proxy from '@/components/proxys';
import createProxyZone from '@/components/proxy_zone_create';
import ProxyZoneList from '@/components/proxy_zone_list';
import singlezone from '@/components/single_zone';
import login from '@/components/login';
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
Vue.use(Router);
export default new Router({
  //mode: 'history',//this  is  for  remove #  from  url
  routes: [
    {
      path: '/',
      name: 'Home',
      component: serverlists,
      root:  '/'
    },
    {
      path: '/droplet-details/:id',
      name: 'droplet-details',
      component: dropletdetails,
      root:  '/'
    },
    {
      path: '/linkedin-profile',
      name: 'linkedin-profile',
      component: newLinkedinProfile,
      root:  '/'
    },
    {
      path: '/linkedin-profile-list',
      name: 'linkedin-profile-list',
      component: LinkedinProfileLists,
      root:  '/'
    },
    {
      path: '/single-profile/:id',
      name: 'single-profile',
      component: singleProfile,
      root:  '/'
    },
    {
      path: '/proxies',
      name: 'proxies',
      component: proxy,
      root:  '/'
    },
    {
      path: '/proxy-zone',
      name: 'proxy-zone',
      component: createProxyZone,
      root:  '/'
    },
    {
      path: '/proxy-zone-list',
      name: 'proxy-zone-list',
      component: ProxyZoneList,
      root:  '/'
    },
    {
      path: '/single-zone/:id',
      name: 'single-zone',
      component: singlezone,
      root:  '/'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      root:  '/'
    }
  ]
});
