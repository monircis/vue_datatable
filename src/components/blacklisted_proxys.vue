<template>
  <div class="form-modal form-block dropletarea">

    <div class="tp-area">
      <h3 class="pull-left">Blacklisted Proxy List</h3>

    </div>

    <div class="tab-content">
      <div id="all" class="tab-pane fade in active">
        <div class="table-responsive droplets mt15">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Proxy</th>

              <th>Created At</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(proxy,index) in proxys">
              <td>{{ proxy.ip }}</td>
              <td>{{ proxy.createdAt }}</td>

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
        axios.get(this.globalUrl+"/proxy/black-list-proxy")
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
    },
  };
</script>

