<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area"><h3 class="pull-left">Linkedin Profile List </h3>
      <router-link class="btn  base-bg ml30   pull-right" v-bind:to="'/linkedin-profile'"> Create New  Profile
      </router-link>

        <ul class="nav nav-tabs pull-right">
        <li class="active"><a data-toggle="tab" href="#all">All</a></li>
        <li><a data-toggle="tab" href="#Assigned">Assigned</a></li>
        <li><a data-toggle="tab" href="#Unassigned">Unassigned</a></li>
        </ul>

    </div>
    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
               
              <th>LinkedIn Email</th>
              <th>Country</th>
              <th>Proxy IP</th>
              <th width="120px"></th>
              <th>Debug Command</th>
              <th width="100px">Autopilot</th>
              <th>Action</th>
              <th width="30px">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(Profile ,index) in linkedinProfiles">
               
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

              </td>
              <td>
                <button type="button" class="btn btn-configure btn-sm  black-text " v-bind:class="[Profile.autopilot ? 'disabled' : ' ']"  @click="doCopy(index)">Copy command</button>
              </td>
              <td>
                <div class="switch">
                  <label>
                     Off
                    <input type="checkbox" v-model="Profile.autopilot" @change="autopilotMode(index)">
                    <span class="lever"></span> On
                  </label>
                </div>
              </td>
              <td width="40px" class="text-center">
                <router-link v-bind:to="'single-profile/'+Profile._id">
                  <span><i aria-hidden="true" class="fa fa-location-arrow size"></i></span>
                </router-link>
              </td>
              <td class="text-center"><a @click="removeProfile(index)" href="#" class="red-text" ><i class="fa fa-trash-o"></i></a></td>
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
              <th>LinkedIn Email</th>
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
              <th>LinkedIn Email</th>
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
      doCopy: function (index) {
        let  vm  =this;
        let profileId = this.linkedinProfiles[index]._id;
        let  command = "node app.js fix --profileId='"+profileId+"'";
        this.$copyText(command).then(function (e) {
          vm.$toasted.show('Command copied!', {
            type: 'success',
            icon: 'fa-exclamation-triangle'
          });
          console.log(e)
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
      },
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
        axios.post(this.globalUrl+"/profile/assign-proxy",
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
        console.log(getProfile);
        axios.post(this.globalUrl+"/profile/remove-proxy",
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
      },

      autopilotMode: function (index) {
        let vm = this;
        let getProfileId = this.linkedinProfiles[index]._id;
        let status = this.linkedinProfiles[index].autopilot;
        console.log(status);
        axios.post(this.globalUrl+"/profile/update-autopilot-mode",
          {
            profileId: getProfileId,
            autopilot: status,
          }
        ).then(function (response) {
          vm.$toasted.show('Mode changed.', {
            type: 'success',
            icon: 'fa-exclamation-triangle'
          });
        })
          .catch((response) => {
            console.log(response);
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      },

      removeProfile: function (index) {
        let vm = this;
        let getProfileId = this.linkedinProfiles[index]._id;
        //console.log(getProfile);
        axios.post(this.globalUrl+"/profile/delete-profile",
          {
            profileId: getProfileId,
          }
        ).then(function (response) {
          vm.linkedinProfiles.splice(index, 1);
          vm.$toasted.show('Successfully removed.', {
            type: 'success',
            icon: 'fa-exclamation-triangle'
          });
        })
          .catch((response) => {
            console.log(response);
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      }
    }
  };
</script>
