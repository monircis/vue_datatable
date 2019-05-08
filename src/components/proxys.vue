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
              <th width="120px"></th>
              <th width="120px">Profile Url</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(proxy,index) in proxys">
              <td>{{ proxy.ip }}</td>
              <td>{{ proxy.country }}</td>
              <td>{{ proxy.active }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="blacklist(index)">Blacklist
                </button>
              </td>
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
            <tr v-for="(proxy , index) in proxys" v-if="proxy.active">
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
            console.log(response.data.data);
            vm.proxys =response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      blacklist: function (index) {
        let vm = this;
        let getproxy = this.proxys[index];
        axios.post(this.globalUrl+"/proxy/black-list-proxy",
          {
            ip: getproxy.ip,
            zone: getproxy.zone,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.proxys.splice(index, 1);
          vm.$toasted.show('Ip blacklisted Successfully.', {
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

