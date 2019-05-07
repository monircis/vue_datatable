<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area"><h3 class="pull-left">Linkedin Profile List </h3>
      <router-link class="btn  base-bg ml30   pull-right" v-bind:to="'/linkedin-profile'"> Create New  Profile
      </router-link>

        <ul class="nav nav-tabs pull-right">
        <li class="active"><a data-toggle="tab" href="#all">All</a></li>
        <li><a data-toggle="tab" href="#Assigned">Assigned</a></li>
        <li><a data-toggle="tab" href="#Unassigned">Un Assigned</a></li>
        </ul>

    </div>
    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>Linkedin Email</th>
              <th>Country</th>
              <th>Proxy IP</th>
              <th width="120px"></th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(Profile ,index) in linkedinProfiles">
              <td class="text-center" width="60px">
                <img class="img-circle img-thumbnail pull-left" :src="url + (index + 1)"/>
              </td>
              <td>{{ Profile.linkedinEmail}}</td>
              <td>{{ Profile.country }}</td>
              <td class="text-left" :id="'Proxy_Id_'+Profile._id">
                {{ Profile.proxy_ip }}
              </td>
              <td>

                <button class="btn btn-danger btn-xs" :id="'remove_'+Profile._id" @click="removeProxy(index)" v-if="Profile.proxy_ip.length">
                  Remove Proxy
                </button>
                <button class="btn base-bg btn-xs" :id="'assign_'+Profile._id" @click="assignProxy(index)" v-else>
                  Assign Proxy
                </button>

                <!--<div v-if="hasIP(Profile)">-->
                <!--ok-->
                <!--</div>-->
                <!--<div v-else>-->
                <!--none-->
                <!--</div>-->
              </td>
              <td width="40px" class="text-center">
                <router-link v-bind:to="'single-profile/'+Profile._id">
                  <span><i aria-hidden="true" class="fa fa-location-arrow size"></i></span>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="Assigned" class="tab-pane fade">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>Linkedin Email</th>
              <th>Country</th>
              <th>Proxy IP</th>
              <th width="120px"></th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(Profile ,index) in linkedinProfiles" v-if="Profile.proxy_ip">
              <td class="text-center" width="60px">
                <img class="img-circle img-thumbnail pull-left" :src="url + (index + 1)"/>
              </td>
              <td>{{ Profile.linkedinEmail}}</td>
              <td>{{ Profile.country }}</td>
              <td class="text-left" :id="'Proxy_Id_'+Profile._id">
                {{ Profile.proxy_ip }}
              </td>
              <td>

                <button class="btn btn-danger btn-xs" :id="'remove_'+Profile._id" @click="removeProxy(index)" v-if="Profile.proxy_ip.length">
                  Remove Proxy
                </button>
                <button class="btn base-bg btn-xs" :id="'assign_'+Profile._id" @click="assignProxy(index)" v-else>
                  Assign Proxy
                </button>

                <!--<div v-if="hasIP(Profile)">-->
                <!--ok-->
                <!--</div>-->
                <!--<div v-else>-->
                <!--none-->
                <!--</div>-->
              </td>
              <td width="40px" class="text-center">
                <router-link v-bind:to="'single-profile/'+Profile._id">
                  <span><i aria-hidden="true" class="fa fa-location-arrow size"></i></span>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="Unassigned" class="tab-pane fade">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>Linkedin Email</th>
              <th>Country</th>
              <th>Proxy IP</th>
              <th width="120px"></th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(Profile ,index) in linkedinProfiles" v-if="!Profile.proxy_ip">
            <td class="text-center" width="60px">
                <img class="img-circle img-thumbnail pull-left" :src="url + (index + 1)"/>
              </td>
              <td>{{ Profile.linkedinEmail}}</td>
              <td>{{ Profile.country }}</td>
              <td class="text-left" :id="'Proxy_Id_'+Profile._id">
                {{ Profile.proxy_ip }}
              </td>
              <td>

                <button class="btn btn-danger btn-xs" :id="'remove_'+Profile._id" @click="removeProxy(index)" v-if="Profile.proxy_ip.length">
                  Remove Proxy
                </button>
                <button class="btn base-bg btn-xs" :id="'assign_'+Profile._id" @click="assignProxy(index)" v-else>
                  Assign Proxy
                </button>

                <!--<div v-if="hasIP(Profile)">-->
                <!--ok-->
                <!--</div>-->
                <!--<div v-else>-->
                <!--none-->
                <!--</div>-->
              </td>
              <td width="40px" class="text-center">
                <router-link v-bind:to="'single-profile/'+Profile._id">
                  <span><i aria-hidden="true" class="fa fa-location-arrow size"></i></span>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  const $ = require('jquery');
  window.$ = $;
  export default {
    data() {
      return {
        url: "https://via.placeholder.com/40/eee/FF425D/?text=",
        linkedinProfiles: []
      }
    },
    created: function () {
      this.loadApiData();
    },
    computed: {
    },
    methods: {
      loadApiData: function () {
        let vm = this;
        vm.$parent.startLoading();
        axios.get(this.globalUrl+"/profile/")
          .then(function (response) {
            //console.log(response.data);
            let tempData =response.data.data;
            tempData.forEach(function (profile) {
              if (!profile.hasOwnProperty('proxy_ip')) {
                profile.proxy_ip=''
              }
              vm.linkedinProfiles.push(profile);
            });

            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            console.log(response);
            vm.$parent.endLoading();
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      },
      assignProxy: function (index) {
        let vm = this;
        let getProfile = this.linkedinProfiles[index];
        axios.post(this.globalUrl+"/proxy/assign-proxy",
          {
            profileId: getProfile._id,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.linkedinProfiles[index].proxy_ip=response.data.data.proxy_ip;
          //end loading
          vm.$parent.endLoading();
        })
          .catch((response) => {
            console.log(response);
            vm.$parent.endLoading();
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      },
      removeProxy: function (index) {
        let vm = this;
        let getProfile = this.linkedinProfiles[index];
        axios.post(this.globalUrl+"/proxy/remove-proxy",
          {
            profileId: getProfile._id,
          }
        ).then(function (response) {
          vm.linkedinProfiles[index].proxy_ip='';
          console.log(vm.linkedinProfiles);
          //end loading
          vm.$parent.endLoading();
        })
          .catch((response) => {
            console.log(response);
            vm.$parent.endLoading();
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      }
    }
  };
</script>
