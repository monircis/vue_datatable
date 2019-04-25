<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Droplet List</h3>
    </div>
    <div class="table-responsive droplets mt15">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>Server</th>
          <th>Server Name</th>
          <th>Server ID</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="(droplet ,index) in droplets">
          <td class="text-center" width="50px"><img class=" " src="@/assets/images/windows-8.png" width="15px"/></td>
          <td>{{ droplet.name }}</td>
          <td>{{ droplet.id}}</td>
          <td width="110px">
            <div class="switch">
              <label>
                Off
                <input type="checkbox" checked="checked"    @change="updateStatus(index)">
                <span class="lever"></span> On
              </label>
            </div>
            <!--<button type="button" class="btn btn-sm  btn-info waves-effect waves-light">ON/OFF</button>-->
          </td>
          <td width="120px"><router-link class="btn btn-configure btn-sm" v-bind:to="'droplet-details/'+droplet.id" >Configure</router-link></td>

        </tr>
        </tbody>
      </table>
    </div>
    </div>

</template>

<script>
  import axios from 'axios';
  export default {
    data() {
         return{
           serverStatus:'',
           droplets: [],
      }
    },
    created: function() {
      this.loadApiData();
      this.dropletDetails();
    },
    methods: {
      loadApiData: function() {
        var vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get("https://command-center-vm-api.herokuapp.com/api/vms")
          .then(function(response) {
             console.log(response.data);
            vm.droplets = response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      updateStatus: function() {
        //alert();
      }
    }
  };
</script>

