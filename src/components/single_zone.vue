<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Proxy List</h3>
      <router-link class="btn  base-bg ml30   pull-right" v-bind:to="'/proxy-zone-list'">Proxy Zone List
      </router-link>
      <!--<router-link class="btn  base-bg ml30   pull-left" v-bind:to="'/proxy-zone'">Create New-->
      <!--</router-link>-->
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
              <th>IP</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="ip in ips">
              <td>{{ ip }}</td>
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
            vm.ips =response.data.data;
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

