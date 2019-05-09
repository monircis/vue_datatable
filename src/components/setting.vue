<template>
  <div class="form-modal form-block">
    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">General Setting</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/'"> LinkedIn Profile List
          </router-link>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            Minimum Delay:
          </label>
          <input type="number" class="form-control" v-model="setting.minimum_delay">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            Maximum Delay:
          </label>
          <input type="number" class="form-control" v-model="setting.maximum_delay">
        </div><!--end single-->
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>
            Daily Profile Limit:
          </label>
          <input type="number" class="form-control" v-model="setting.daily_profile_limit">
        </div><!--end single-->
      </div>

    </div>
    <div class="action-footer mt15">
      <button class="btn base-bg" @click="updateSetting" value="submit">
        Update  Now
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
        setting: {}
      }
    },
    created: function () {
      this.loadApiData();
    },
    methods: {
      loadApiData: function () {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get(this.globalUrl+"/task/setting/")
          .then(function (response) {
            vm.setting =response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      updateSetting: function () {
        let vm = this;
          axios.post(this.globalUrl+"/task/setting/update/",
            {
              settingId: vm.setting._id,
              minimum_delay: vm.setting.minimum_delay,
              maximum_delay: vm.setting.maximum_delay,
              daily_profile_limit: vm.setting.daily_profile_limit,
            }
          ).then(function (response) {
            //console.log(response.data);
            vm.setting =response.data.data;
            vm.$toasted.show('Setting Updated Successfully.', {
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
              //end loading
              //console.log(response);
            });

      }
    },
  };
</script>
