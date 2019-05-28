import Vue from 'vue';
import Router from 'vue-router';
import setting from '@/components/setting';
import serverlists from '@/components/server_lists';
import dropletdetails from '@/components/droplet_details';
import newlinkedinprofile from '@/components/linkedin_profile_create';
import linkedinprofilelists from '@/components/linkedin_profile_list';
import singleprofile from '@/components/singleprofile';
import proxy from '@/components/proxys';
import createproxyzone from '@/components/proxy_zone_create';
import proxyzonelist from '@/components/proxy_zone_list';
import blacklistedproxy from '@/components/blacklisted_proxys';
import singlezone from '@/components/single_zone';
import tasks from '@/components/tasks';
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
      component: linkedinprofilelists,
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
      component: newlinkedinprofile,
      root:  '/'
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
      root:  '/'
    },
    {
      path: '/machines',
      name: 'machines',
      component: serverlists,
      root:  '/'
    },
    {
      path: '/single-profile/:id',
      name: 'single-profile',
      component: singleprofile,
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
      component: createproxyzone,
      root:  '/'
    },
    {
      path: '/proxy-zone-list',
      name: 'proxy-zone-list',
      component: proxyzonelist,
      root:  '/'
    },
    {
      path: '/blacklisted-proxy',
      name: 'blacklisted-proxy',
      component: blacklistedproxy,
      root:  '/'
    },

    {
      path: '/single-zone/:id',
      name: 'single-zone',
      component: singlezone,
      root:  '/'
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks,
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
