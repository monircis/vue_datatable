<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6 mb15" v-for="(event ,index) in dropletDetail.events">
            <div class="form-modal form-block width-auto">
              <div class="tp-area">
                <h3 class="pull-left">Single Droplet</h3>
              </div>
              <code>
                {{event}}
              </code>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-modal form-block width-auto border5px">
          <div class="tp-area">
            <h3 class="pull-left"><img class=" " src="@/assets/images/droplet.png" width="16px"/> Droplet Information
            </h3>
          </div>
          <div class="table-responsive droplets mt15">
            <table class="table table-bordered">
              <!--<thead>-->
              <!--<tr>-->
              <!--<th>-->
              <!--Server-->
              <!--</th>-->
              <!--<th>-->
              <!--Server Name-->
              <!--</th>-->

              <!--</tr>-->
              <!--</thead>-->
              <tbody>

              <tr>
                <td>
                  ID
                </td>

                <td class="base-color">
                  {{dropletDetail.id}}
                </td>
              </tr>
              <tr>
                <td>
                  Name
                </td>

                <td class="base-color">
                  {{dropletDetail.name}}
                </td>
              </tr>
              <tr>
                <td>
                  RAM
                </td>

                <td class="base-color">
                  {{dropletDetail.ram}}
                </td>
              </tr>
              <tr>
                <td>
                  CPUS
                </td>

                <td class="base-color">
                  {{dropletDetail.cpus}}
                </td>
              </tr>
              <tr>
                <td>
                  GPU
                </td>

                <td class="base-color">
                  {{dropletDetail.gpu}}
                </td>
              </tr>
              <tr>
                <td>
                  Storage Total
                </td>

                <td class="base-color">
                  {{dropletDetail.storageTotal}}
                </td>
              </tr>

              <tr>
                <td>
                  Storage Used
                </td>

                <td class="base-color">
                  {{dropletDetail.storageUsed}}
                </td>
              </tr>
              <tr>
                <td>
                  Usage Rate
                </td>

                <td class="base-color">
                  {{dropletDetail.usageRate}}
                </td>
              </tr>
              <tr>
                <td>
                  Shutdown Timeout In Hours
                </td>
                <td class="base-color">
                  {{dropletDetail.shutdownTimeoutInHours}}
                </td>
              </tr>
              <tr>
                <td>
                  shutdown Timeout Forces
                </td>

                <td class="base-color">
                  {{dropletDetail.shutdownTimeoutForces}}
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <!--<code>-->
          <!--{{dropletDetail}}-->
          <!--</code>-->
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
        dropletDetail: {}
      }
    },
    mounted: function () {
      this.dropletDetails();
    },
    methods: {
      dropletDetails: function () {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        let droplet_id = this.$route.params.id;
        axios.get("https://command-center-apis.herokuapp.com/vm/" + droplet_id+'/')
          .then(function (response) {
            console.log(response.data);
            vm.dropletDetail = response.data.data;
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

