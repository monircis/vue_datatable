<template>
  <div class="form-modal form-block">
    <div>
      <div class="row">
        <div class="col-md-12">
          <div class="tp-area mb15">
            <h3 class="pull-left">LinkedIn Profile Detail</h3>
            <router-link class="btn-reset pull-right" v-bind:to="'/'"> LinkedIn Profile List
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
            <input type="text" class="form-control" id="linkedIn_password" v-bind:placeholder="placeholder">
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
        <div class="col-md-5">
          <div class="form-group">
            <label>
              Proxy:
            </label>
            <input type="text" class="form-control" v-model="profileDetail.proxy_ip" disabled>
          </div><!--end single-->
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>
              Session Created At:
            </label>
            <input type="text" class="form-control" v-model="profileDetail.sessionCreatedAt" disabled>
          </div><!--end single-->
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>
              &nbsp;
            </label>
            <button class="btn btn-danger btn-xs btn-block" @click="clearSession" v-if="profileDetail.sessionCreatedAt">
              Clear Session
            </button>
            <button class="btn btn-reset btn-xs btn-block black-text disabled" v-else>
              Clear Session
            </button>
          </div><!--end single-->
        </div>
      </div>
      <div class="action-footer mt15">
        <button class="btn btn-danger btn-xs pull-left" @click="removeProxy" v-if="profileDetail.proxy_ip.length">
          Remove Proxy
        </button>
        <button class="btn base-bg btn-xs pull-left" @click="assignProxy" v-else>
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
  $(function () {
    // let plainPassword='sdsad';
    // function hideMidPassword(plainPassword) {
    //   if (plainPassword.length < 3) return plainPassword;
    //   const starChar = plainPassword.substr(0, 1);
    //   const lastChar = plainPassword.substr(plainPassword.length - 1);
    //   const midChar = '*'.repeat(plainPassword.length - 2);
    //   return starChar + midChar + lastChar;
    // }
  });

  export default {
    data() {
      return {
        message: 'Foo',
        profileDetail: {}
      }
    },
    mounted: function () {
      this.singleProfileDetails();
    },
    computed: {
      // a computed
      placeholder: function () {
        let plainPassword = this.profileDetail.linkedinPassword;
        if (plainPassword.length < 3) return plainPassword;
        const starChar = plainPassword.substr(0, 1);
        const lastChar = plainPassword.substr(plainPassword.length - 1);
        const midChar = '*'.repeat(plainPassword.length - 2);
        return starChar + midChar + lastChar;
        //return this.profileDetail.linkedinPassword;
      }
    },
    methods: {
      singleProfileDetails: function () {
        let profile_id = this.$route.params.id;
        let vm = this;
        //get  profile  information
        axios.get(this.globalUrl + "/profile/" + profile_id).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail = response.data.data;
          if (!vm.profileDetail.hasOwnProperty('proxy_ip')) {
            vm.profileDetail.proxy_ip = ''
          }
          console.log(vm.profileDetail);
          //end loading
          vm.$parent.endLoading();
        })
      },
      updateUser: function () {
        let vm = this;
        //console.log(vm.profileDetail.linkedinPassword);
        let linkedin_password = $('#linkedIn_password').val();
        let formData = {
          profileId: this.$route.params.id,
          user_agent: vm.profileDetail.user_agent,
          daily_page_limit: vm.profileDetail.daily_page_limit
        };
        if (linkedin_password.length > 0) {
          formData.linkedinPassword = linkedin_password;
        }
        axios.post(this.globalUrl + "/profile/update-profile", formData)
          .then(function (response) {
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
        vm.$parent.startLoading();
        axios.post(this.globalUrl + "/profile/assign-proxy",
          {
            profileId: this.$route.params.id
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail.proxy_ip = response.data.data.proxy_ip;
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
        vm.$parent.startLoading();
        axios.post(this.globalUrl + "/profile/remove-proxy",
          {
            profileId: this.$route.params.id
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail.proxy_ip = '';
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
      clearSession: function () {
        let vm = this;
        axios.post(this.globalUrl + "/task/remove-session",
          {
            profileId: this.$route.params.id
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail.sessionCreatedAt = '';
          vm.$toasted.show('Session Clear Successfully.', {
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
    },
  };
</script>
