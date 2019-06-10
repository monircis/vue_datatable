<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Proxy Zone: <b class="base-color">{{ zoneName }}</b><br>Zone Country: <b class="base-color">{{ zoneCountry }}</b></h3>
      <router-link class="btn  base-bg ml30   pull-right" v-bind:to="'/proxy-zone-list'">Proxy Zone List
      </router-link>
    </div>
    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>IP</th>
              <th width="120px">Profile Url</th>
              <th width="100px"></th>
            
            </tr>
            </thead>
            <tbody>
            <tr v-for="(ip, index) in ips">
              <td>{{ ip.ip }}</td>
              <td>
                <div v-if="ip.profileId">
                  <router-link class="btn btn-configure btn-info btn-sm" v-bind:to="'/single-profile/'+ip.profileId">Connected Profile <i aria-hidden="true" class="fa fa-external-link fa-1x"></i>
                  </router-link>
                </div>
              </td>
              <td>
                <button class="btn btn-danger btn-sm" @click="blacklist(index)">Blacklist
                </button>
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
        zoneName:'',
        zoneCountry:'',
        ips: [],
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
        //alert(this.globalUrl+"/luminati/zone/"+this.$route.params.id);
        axios.get(this.globalUrl+"/luminati/zone/"+this.$route.params.id)
          .then(function (response) {
            console.log(response.data.data);
            console.log(response.data.data);
            vm.ips =response.data.data;
            vm.zoneName =response.data.data[0].zone;
            vm.zoneCountry =response.data.data[0].country;
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
        let getproxy = this.ips[index];
        console.log(getproxy);
        axios.post(this.globalUrl+"/proxy/black-list-proxy",
          {
            ip: getproxy.ip,
            zone: getproxy.zone,
          }
        ).then(function (response) {
          console.log(response.data.data);
          vm.ips.splice(index, 1);
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

