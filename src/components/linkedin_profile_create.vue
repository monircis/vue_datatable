<template>
  <div class="form-modal form-block">
    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">Create New LinkedIn Profile</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/'"> LinkedIn Profile List
          </router-link>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>
            LinkedIn Email:
          </label>
          <input type="text" class="form-control" v-model="linkedinEmail">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            LinkedIn Password:
          </label>
          <input type="text" class="form-control" v-model="linkedinPassword">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            User Agent:
          </label>
          <input type="text" class="form-control" v-model="user_agent">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Daily Page Limit:
          </label>
          <input type="number" class="form-control" v-model="daily_page_limit">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Country:
          </label>
          <select v-model="country" class="form-control show-select">
            <option value="US">US - United States</option>
            <option value="IN">IN - India</option>
            <option value="HK">HK - Hong Kong</option>
            <option value="CA">CA - Canada</option>
            <option value="SG">SG - Singapore</option>
            <option value="UK">UK - United Kingdom</option>
            <option value="AU">AU - Australia</option>
            <option value="ZA">ZA - South Africa</option>
          </select>
        </div><!--end single-->
      </div>
    </div>
    <div class="action-footer mt15">
      <button class="btn base-bg" @click="createUser()" value="submit">
        Save Now
      </button>
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
        //dropletDetail: {}
        linkedinEmail: '',
        linkedinPassword: '',
        user_agent:  '',
        daily_page_limit:  '',
        country:  ''
      }
    },
    methods: {
      createUser: function () {
        let vm = this;
        if (vm.linkedinEmail && vm.linkedinPassword && vm.user_agent && vm.daily_page_limit && vm.country) {
          //alert(vm.password);
          //start loading
          vm.$parent.startLoading();
          axios.post(this.globalUrl+"/profile/create-profile/",
            {
              linkedinEmail: vm.linkedinEmail,
              linkedinPassword: vm.linkedinPassword,
              user_agent: vm.user_agent,
              daily_page_limit: vm.daily_page_limit,
              country: vm.country
            }
          ).then(function (response) {
            console.log(response.data);
            //end loading
            vm.$parent.endLoading();
            vm.$toasted.show('User Created Successfully.', {
              type: 'success',
              icon: 'fa-exclamation-triangle'
            });
            vm.linkedinEmail= '';
            vm.linkedinPassword= '';
            vm.user_agent= '';
            vm.daily_page_limit= '';
            vm.country= '';
          })
            .catch((response) => {
              vm.$parent.endLoading();
              vm.$toasted.show('Something wrong  Try again.', {
                type: 'error',
                icon: 'fa-exclamation-triangle'
              });
              //end loading
              //console.log(response);
            });
        }else{
          vm.$toasted.show('Please Fill all fields', {
            type: 'error',
            icon: 'fa-exclamation-triangle'
          });
        }
      }
    },
  };
</script>
