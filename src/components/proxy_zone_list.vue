<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Proxy List</h3>
      <router-link class="btn  base-bg ml30   pull-right" v-bind:to="'/proxy-zone'">Create New
      </router-link>
      <!--<ul class="nav nav-tabs pull-right">-->
        <!--<li class="active"><a data-toggle="tab" href="#all">All</a></li>-->
        <!--<li><a data-toggle="tab" href="#active">Active</a></li>-->
        <!--<li><a data-toggle="tab" href="#inactive">Inactive</a></li>-->
      <!--</ul>-->
    </div>

    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Zone</th>
              <th>username</th>
              <th>IP pool size</th>
              <th>Country</th>
              <th></th>
              <th width="120px">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(zone, index) in zones">
              <td>{{ zone.zone }}</td>
              <td>{{ zone.username }}</td>
              <td>{{ zone.pool_size }}</td>
              <td>{{ zone.country }}</td>
              <td>
                <button type="button" class="btn btn-configure btn-sm black-text" @click="sync_zone(index)">Sync Now
                </button>
              </td>
              <td>
                <div>
                  <router-link class="btn btn-configure btn-sm"  v-bind:to="'/single-zone/'+zone.zone">IPs
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
        zones: [],
      }
    },
    created: function () {
      this.loadApiData();
      //this.dropletDetails();
    },
    methods: {
      loadApiData: function () {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get(this.globalUrl+"/luminati/zone/")
          .then(function (response) {
            vm.zones =response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      sync_zone: function (index) {
        let vm = this;
        let getZone = this.zones[index];
        axios.post(this.globalUrl+"/luminati/zone/sync",
          {
            zone: getZone.zone,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.zones[index]=response.data.data.zone;
          vm.$toasted.show('Zone Sync Successfully.', {
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

