<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Machine List </h3>
      <div class="search-input width450">
        <i class="icon-icommon-search sidebar-menu__icon"></i>
        <input type="text" class="form-control pull-right  searchbar" placeholder="Search Machine  Using Name or ID"
               v-model="searchDroplet">
      </div>
    </div>
    <div class="table-responsive droplets mt15">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>OS</th>
          <th>Machine Name</th>
          <th>Machine ID</th>
          <th>Status</th>
          <!--<th>Action</th>-->
        </tr>
        </thead>
        <tbody>
        <tr v-for="(droplet ,index) in droplets">
          <td class="text-center" width="50px"><img class=" " src="@/assets/images/windows-8.png" width="15px"/></td>
          <td>{{ droplet.name }}</td>
          <td>{{ droplet.id}}</td>
          <td width="50px" class="status">
            <div class="show-delay" :id="'id_' + index" v-show="delay">
              <img src="@/assets/images/circle-loader.gif"/>
            </div>

            <div class="switch">
              <label>
                OFF
                <input type="checkbox" v-model="droplet.state" @change="updateStatus(index,$event)">
                <span class="lever"></span> ON
              </label>
            </div>
          </td>
          <!--<td width="120px">-->
            <!--<router-link class="btn btn-configure btn-sm" v-bind:to="'droplet-details/'+droplet.id">Configure-->
            <!--</router-link>-->
          <!--</td>-->

        </tr>
        </tbody>
      </table>
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
        delay: false,
        searchDroplet: '',
        serverStatus: '',
        droplets: [],
        alldroplets: []
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
        axios.get(this.globalUrl+"/machine/")
          .then(function (response) {
            //console.log(response.data);
            let tempData = response.data.data;
            tempData.forEach(function (droplet) {
              droplet.state = droplet.state === 'ready';
              vm.droplets.push(droplet);
            });
            //vm.droplets = response.data.data;
            vm.alldroplets = vm.droplets;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      updateStatus: function (index, event) {
        //make  show  loader  just specific  button
        let loader = $(event.target).parent().parent().siblings('#id_' + index);
        $(loader).css({"display": "block"});
        let vm = this;
        //vm.delay=true;
        //get  ingle  droplet by  index
        let getdroplet = this.droplets[index];

        //console.log(getdroplet);
        //find state
        let state = getdroplet.state;
        //alert(state);
        let dropletID = getdroplet.id;
        if (state == true) {
          //alert(dropletID);
          //console.log(state);
          axios.put(this.globalUrl+"/machine/start/" + dropletID + '/', {
            headers: {"Content-Type": 'application/json'},
            timeout: 2 * 60 * 1000
          })
            .then(function (response) {
              console.log(response.data.data);
              vm.$toasted.show('Server Is ON :: ' + getdroplet.name, {
                type: 'success',
                icon: 'fa-exclamation-triangle'
              });
              // show false loader
              $(loader).css({"display": "none"});
            })
            .catch(function (error) {
              vm.$toasted.show('Server Is ON :: ' + getdroplet.name, {
                type: 'success',
                icon: 'fa-exclamation-triangle'
              });
              console.log(error);
              // show false loader
              $(loader).css({"display": "none"});
            });
        } else {
          axios.put(this.globalUrl+"/machine/stop/" + dropletID + '/', {headers: {"Content-Type": 'application/json'}})
            .then(function (response) {
              vm.$toasted.show('Server Is OFF  :: ' + getdroplet.name, {
                type: 'error',
                icon: 'fa-exclamation-triangle'
              });
              console.log(this.droplets);
              // show false loader
              $(loader).css({"display": "none"});
            })
            .catch(function (error) {
              $(loader).css({"display": "none"});
            });
        }
      }
    },
    watch: {
      searchDroplet: function (val) {
        console.log(val);
        if (this._.isEmpty(val) & val.length > 0) {
          this.droplets = this.droplets
        } else {
          this.droplets = this._.filter(this.alldroplets, function (droplets) {
            return droplets.name.toLowerCase().includes(val.toLowerCase()) || droplets.id === val
          });
        }
      }
    },
  };
</script>

