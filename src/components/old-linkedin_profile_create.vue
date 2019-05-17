<template>
  <div class="form-modal form-block">

    <!--<input type="text" v-model="postTitle" placeholder="title"/>-->
    <!--<input type="text" v-model="postBody" placeholder="body"/>-->
    <!--<input type="button" @click="createPost()" value="submit" class="btn  btn-danger">-->


    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">Create New Linkedin Profile</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/linkedin-profile'"> Profile List's
          </router-link>
        </div>
      </div>

      <div class="col-md-7">
        <div class="form-group">
          <label>
            Username:
          </label>
          <input type="text" class="form-control" v-model="username">
        </div><!--end single-->
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label>
            Password:
          </label>
          <input type="text" class="form-control" v-model="password">
        </div><!--end single-->
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>
            User Agent:
          </label>
          <select v-model="user_agent" class="form-control show-select">
            <option value="2">A</option>
          </select>
        </div><!--end single-->
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>
            Minimum Delay:
          </label>
          <input type="text" class="form-control timepicker" v-model="minimum_delay">
        </div><!--end single-->
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>
            Maximum Delay:
          </label>
          <input type="text" class="form-control timepicker" v-model="maximum_delay">
        </div><!--end single-->
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>
            Daily Page Limit:
          </label>
          <input type="text" class="form-control timepicker" v-model="daily_page_limit">
        </div><!--end single-->
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>
            Country:
          </label>
          <input type="text" class="form-control" v-model="country">
        </div><!--end single-->
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>
            Start at:
          </label>
          <input type="text" class="form-control" v-model="start_at">
        </div><!--end single-->
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>
            End at:
          </label>
          <input type="text" class="form-control" v-model="end_at">
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
        // username: '',
        // password: '',
      }
    },
    methods: {
      createUser: function () {
        let vm = this;
        //alert(vm.password);
        //start loading
        vm.$parent.startLoading();
        axios.get("https://command-center-vm-api.herokuapp.com/api/",
          {
            username: vm.username,
            password: vm.password,
            user_agent: vm.user_agent,
            minimum_delay: vm.minimum_delay,
            maximum_delay: vm.maximum_delay,
            daily_page_limit: vm.daily_page_limit,
            country: vm.country,
            start_at: vm.start_at,
            end_at: vm.end_at
          }
        ).then(function (response) {
          console.log(response.data);
          //end loading
          vm.$parent.endLoading();
        })
          .catch((response) => {
            vm.$parent.endLoading();
            //end loading
            //console.log(response);
          });
      }
    },
  };
</script>
