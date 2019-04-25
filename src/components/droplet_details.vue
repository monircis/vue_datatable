<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6">
            <div class="form-modal form-block width-auto">
              <div class="tp-area">
                <h3 class="pull-left">Single Droplet</h3>
              </div>
              <code>
                {{dropletDetail.events}}
              </code>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-4">
        <div class="form-modal form-block width-auto">
          <div class="tp-area">
            <h3 class="pull-left">Droplet Information</h3>
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
                <td class="text-center" width="50px">
                ID
                </td>

                <td width="120px">
               {{dropletDetail.id}}
                </td>
              </tr>
              <tr>
                <td class="text-center" width="50px">
               Name
                </td>

                <td width="120px">
                  {{dropletDetail.name}}
                </td>
              </tr>
              <tr>
                <td class="text-center" width="50px">
                  OS
                </td>

                <td width="120px">
                  {{dropletDetail.os}}
                </td>
              </tr>
              <tr>
                <td class="text-center" width="50px">
                  Distro
                </td>

                <td width="120px">
                  <!--{{dropletDetail.distro}}-->
                </td>
              </tr>
              <tr>
                <td class="text-center" width="50px">
                  major
                </td>

                <td width="120px">
                  {{dropletDetail.major}}
                </td>
              </tr>
              <tr>
                <td class="text-center" width="50px">
                  minor
                </td>

                <td width="120px">
                  {{dropletDetail.minor}}
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <code>
            {{dropletDetail}}
          </code>
        </div>

      </div>
    </div>
    <!--<div class="form-modal form-block dropletarea-full">-->
      <!--<div class="tp-area">-->
        <!--<h3 class="pull-left">Droplet Deatil  <b>ID: {{ $route.params.id }}</b></h3>-->
      <!--</div>-->
      <!--<code>-->
        <!--{{dropletDetail}}-->
      <!--</code>-->
    <!--</div>-->
  </div>
</template>

<script>
  const $ = require('jquery');
  window.$ = $;
  //click a date and  catch  the date
  $(function() {
    //alert();
  });

  import axios from 'axios';
  export default {
    data() {
         return{
           dropletDetail:{}
      }
    },
    mounted: function () {
       this.dropletDetails();
    },
    methods: {
      dropletDetails: function() {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        let  droplet_id =this.$route.params.id;
        axios.get("https://command-center-vm-api.herokuapp.com/api/vms/"+droplet_id)
          .then(function(response) {
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

