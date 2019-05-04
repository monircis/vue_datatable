<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Proxy List</h3>
      <ul class="nav nav-tabs pull-right">
        <li class="active"><a data-toggle="tab" href="#all">All</a></li>
        <li><a data-toggle="tab" href="#active">Active</a></li>
        <li><a data-toggle="tab" href="#inactive">Inactive</a></li>
      </ul>
    </div>

    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Proxy</th>
              <th>Country</th>
              <th>Status</th>
              <th width="120px">Profile Url</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="proxy in proxys">
              <td>{{ proxy.ip }}</td>
              <td>{{ proxy.country }}</td>
              <td>{{ proxy.active }}</td>
              <td>
                <div v-if="proxy.profileId">
                  <router-link class="btn btn-configure btn-sm" v-bind:to="'single-profile/'+proxy.profileId">Connected Profile
                  </router-link>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="active" class="tab-pane fade">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Proxy</th>
              <th>Country</th>
              <th>Status</th>
              <th width="120px">Profile Url</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="proxy in proxys" v-if="proxy.active">
              <td>{{ proxy.ip }}</td>
              <td>{{ proxy.country }}</td>
              <td>{{ proxy.active }}</td>
              <td>
                <div v-if="proxy.profileId">
                  <router-link class="btn btn-configure btn-sm" v-bind:to="'single-profile/'+proxy.profileId">Linked Profile
                  </router-link>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="inactive" class="tab-pane fade">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Proxy</th>
              <th>Country</th>
              <th>Status</th>
              <th width="120px">Profile Url</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="proxy in proxys" v-if="!proxy.active">
              <td>{{ proxy.ip }}</td>
              <td>{{ proxy.country }}</td>
              <td>{{ proxy.active }}</td>
              <td>
                <div v-if="proxy.profileId">
                  <router-link class="btn btn-configure btn-sm" v-bind:to="'single-profile/'+proxy.profileId">Linked Profile
                  </router-link>
                </div>
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
        proxys: [],
      }
    },
    created: function () {
      this.loadApiData();
      //this.dropletDetails();
    },
    methods: {
      loadApiData: function () {
        var vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get(this.globalUrl+"/proxy/")
          .then(function (response) {
            vm.proxys =response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
    },
  };
</script>

