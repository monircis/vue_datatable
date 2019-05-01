<template>
  <div class="form-modal form-block">
    <div class="tp-area"><h3 class="pull-left">Linkedin Profile List</h3>
      <router-link class="btn base-bg btn-rounded waves-effect pull-right" v-bind:to="'/linkedin-profile'">Add New Profile
      </router-link>
     </div>
    <div class="users-lists">
      <div class="row single-tab focus" v-for="(Profile ,index) in linkedinProfiles">
        <router-link v-bind:to="'single-profile/'+Profile._id" class="full-width-sp">
        <div class="col-md-7">
          <img src="https://via.placeholder.com/40/eee/1976d2/?text=1"
               class="img-circle img-thumbnail pull-left">
          <div class="patient-main">
            <h4 class="mt5">{{ Profile.linkedinEmail}}</h4>
          </div>
        </div>
          <div class="col-md-3"><span class="patient-main tp15">{{ Profile.country }}</span></div>
        <div class="col-md-2"><span class="open-col"><i aria-hidden="true" class="fa fa-location-arrow"></i></span>
        </div>
        </router-link>
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
        linkedinProfiles: []
      }
    },
    created: function () {
      this.loadApiData();
    },
    methods: {
      loadApiData: function () {
        let vm = this;
          vm.$parent.startLoading();
          axios.get("https://command-center-apis.herokuapp.com/profile/")
            .then(function (response) {
            console.log(response.data);
            vm.linkedinProfiles = response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
            .catch((response) => {
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
