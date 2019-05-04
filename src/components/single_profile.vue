<template>
  <div class="form-modal form-block" >
   <div>
    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">LinkedIn Profile Detail</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/linkedin-profile-list'"> LinkedIn Profile List
          </router-link>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>
            LinkedIn Email:
          </label>
          <input type="text" class="form-control" v-model="profileDetail.linkedinEmail" readonly>
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            LinkedIn Password:
          </label>
          <input type="text" class="form-control" v-model="profileDetail.linkedinPassword">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            User Agent:
          </label>
          <input type="text" class="form-control" v-model="profileDetail.user_agent">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Daily Page Limit:
          </label>
          <input type="number" class="form-control" v-model="profileDetail.daily_page_limit">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Country:
          </label>
          <input type="text" class="form-control" v-model="profileDetail.country" readonly="">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            Proxy:
          </label>
          <input type="text" class="form-control" v-model="profileDetail.proxy_ip"  disabled>
        </div><!--end single-->
      </div>
    </div>
    <div class="action-footer mt15">
      <button class="btn btn-danger btn-xs pull-left" @click="removeProxy" v-if="profileDetail.proxy_ip.length">
        Remove Proxy
      </button>
      <button class="btn base-bg btn-xs pull-left"  @click="assignProxy" v-else>
        Assign Proxy
      </button>
      <button class="btn base-bg" @click="updateUser" value="submit">
        Update Now
      </button>
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
        profileDetail: {}
      }
    },
    mounted: function () {
      this.singleProfileDetails();
    },
    methods: {
      singleProfileDetails: function () {
        let profile_id = this.$route.params.id;
        let vm = this;
        //get  profile  information
        axios.get(this.globalUrl+"/profile/"+profile_id).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail= response.data.data;
            if (! vm.profileDetail.hasOwnProperty('proxy_ip')) {
              vm.profileDetail.proxy_ip=''
            }
            console.log(vm.profileDetail);
         //end loading
          vm.$parent.endLoading();
        })
      },
      updateUser: function () {
        let vm = this;
        //console.log(vm.profileDetail.linkedinPassword);
        axios.post(this.globalUrl+"/profile/update-profile",
          {
            linkedinPassword: vm.profileDetail.linkedinPassword,
            profileId: this.$route.params.id,
            user_agent: vm.profileDetail.user_agent,
            daily_page_limit: vm.profileDetail.daily_page_limit
          }
        ).then(function (response) {
          console.log(response.data);
          //end loading
          vm.$parent.endLoading();
          vm.$toasted.show('User Updated Successfully.', {
            type: 'success',
            icon: 'fa-exclamation-triangle'
          });
        })
          .catch((response) => {
            vm.$parent.endLoading();
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      },
      assignProxy: function () {
        let vm = this;
        // let getProfile = this.profileDetail;
        // console.log(getProfile);
        axios.post(this.globalUrl+"/proxy/assign-proxy",
          {
            profileId: this.$route.params.id
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail.proxy_ip=response.data.data.proxy_ip;
          //vm.profileDetail[index]=response.data.data;
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
      removeProxy: function () {
        let vm = this;
        // let getProfile = this.profileDetail[index];
        // console.log(getProfile);
        axios.post(this.globalUrl+"/proxy/remove-proxy",
          {
            profileId: this.$route.params.id
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail.proxy_ip='';
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
    },
  };
</script>
