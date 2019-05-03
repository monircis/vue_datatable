<template>
  <div class="form-modal form-block" >
   <div v-for="(profile, index) in profileDetail">
    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">Linkedin Profile Detail</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/linkedin-profile-list'"> Linkedin Profile List's
          </router-link>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>
            linkedin Email:
          </label>
          <input type="text" class="form-control" v-model="profile.linkedinEmail" readonly>
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            linkedin Password:
          </label>
          <input type="text" class="form-control" v-model="profile.linkedinPassword">
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
          <input type="number" class="form-control" v-model="profile.daily_page_limit">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Country:
          </label>
          <input type="text" class="form-control" v-model="profile.country" readonly="">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            Proxy:
          </label>
          <input type="text" class="form-control" v-model="profile.proxy_ip"  disabled>
        </div><!--end single-->
      </div>
    </div>
    <div class="action-footer mt15">
      <button class="btn btn-danger btn-xs pull-left" @click="removeProxy(index)" v-if="profile.proxy_ip.length">
        Remove
      </button>
      <button class="btn base-bg btn-xs pull-left"  @click="assignProxy(index)" v-else>
        Assign Proxy
      </button>
      <button class="btn base-bg" @click="updateUser()" value="submit">
        Update Now
      </button>
    </div>
  </div>
  </div>
</template>

<script>
  const $ = require('jquery');
  window.$ = $;
  $(function () {
  });
  import axios from 'axios';

  export default {
    data() {
      return {
        profileDetail: []
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
        axios.get("https://command-center-apis.herokuapp.com/profile/"+profile_id).then(function (response) {
          console.log(response.data.data);
          let tempData = response.data.data;
            if (!tempData.hasOwnProperty('proxy_ip')) {
              tempData.proxy_ip=''
            }
            vm.profileDetail.push(tempData);
          //vm.profileDetail= response.data.data;
          //end loading
          vm.$parent.endLoading();
        })
      },
      updateUser: function () {
        let vm = this;
        console.log(this.profileDetail);
        axios.post("https://command-center-apis.herokuapp.com/profile/update-profile",
          {
            linkedinEmail: this.profileDetail.linkedinEmail,
            linkedinPassword: this.profileDetail.linkedinPassword,
            country: this.profileDetail.country,
            profileId: this.$route.params.id,
            user_agent: this.profileDetail.user_agent,
            daily_page_limit: this.profileDetail.daily_page_limit
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
            alert();
            vm.$parent.endLoading();
            vm.$toasted.show('Something wrong  Try again.', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
          });
      },
      assignProxy: function (index) {
        let vm = this;
        let getProfile = this.profileDetail[index];
        console.log(getProfile);
        axios.post("https://command-center-apis.herokuapp.com/proxy/assign-proxy",
          {
            profileId: getProfile._id,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail[index].proxy_ip=response.data.data.proxy_ip;
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
      removeProxy: function (index) {
        let vm = this;
        let getProfile = this.profileDetail[index];
        console.log(getProfile);
        axios.post("https://command-center-apis.herokuapp.com/proxy/remove-proxy",
          {
            profileId: getProfile._id,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.profileDetail[index].proxy_ip='';
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
