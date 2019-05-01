<template>
  <div class="form-modal form-block">

    <!--<input type="text" v-model="postTitle" placeholder="title"/>-->
    <!--<input type="text" v-model="postBody" placeholder="body"/>-->
    <!--<input type="button" @click="createPost()" value="submit" class="btn  btn-danger">-->


    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">Create New Linkedin Profile</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/linkedin-profile-list'"> Linkedin Profile List's
          </router-link>
        </div>
      </div>

      <div class="col-md-12">
        <div class="form-group">
          <label>
            linkedin Email:
          </label>
          <input type="text" class="form-control" v-model="linkedinEmail">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            linkedin Password:
          </label>
          <input type="text" class="form-control" v-model="linkedinPassword">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Country:
          </label>
          <select v-model="country" class="form-control show-select">
            <option value="USA">USA</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Singapore">Singapore</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="South Africa">South Africa</option>
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
  const $ = require('jquery');
  window.$ = $;
  $(function () {
  });
  import axios from 'axios';

  export default {
    data() {
      return {
        //dropletDetail: {}
        linkedinEmail: '',
        linkedinPassword: '',
        country:  ''
      }
    },
    methods: {
      createUser: function () {
        let vm = this;
        if (vm.linkedinEmail && vm.linkedinPassword && vm.country) {
          //alert(vm.password);
          //start loading
          vm.$parent.startLoading();
          axios.post("https://command-center-apis.herokuapp.com/profile/create-profile/",
            {
              linkedinEmail: vm.linkedinEmail,
              linkedinPassword: vm.linkedinPassword,
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
            vm.linkedinPassword= '';
            vm.linkedinPassword= '';
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
