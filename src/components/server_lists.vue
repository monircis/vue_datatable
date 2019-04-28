<template>
  <div class="form-modal form-block dropletarea">
    <div class="tp-area">
      <h3 class="pull-left">Droplet List</h3>
      <div class="search-input width450">
        <i class="icon-icommon-search sidebar-menu__icon"></i>
        <input type="text" class="form-control pull-right  searchbar" placeholder="Search Droplet Using Name or ID"
               v-model="searchDroplet">
      </div>
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
        <tr v-for="(droplet ,index) in droplets">
          <td class="text-center" width="50px"><img class=" " src="@/assets/images/windows-8.png" width="15px"/></td>
          <td>{{ droplet.name }}</td>
          <td>{{ droplet.id}}</td>
          <td width="50px" class="status">
            <div class="show-delay" v-if="delay" v-model="delay">
              <img src="@/assets/images/circle-loader.gif"/>
            </div>
            <div v-if="droplet.state=='off'">
              <button type="submit" class="btn btn-danger" @click="updateStatus(index)" v-model="droplet.state">OFF
              </button>
            </div>
            <div v-else>
              <div v-if="droplet.state=='starting'">
                <button type="submit" class="btn btn-info" @click="updateStatus(index)" v-model="droplet.state">ON
                </button>
              </div>
              <div v-else>
                <button type="submit" class="btn btn-info" @click="updateStatus(index)" v-model="droplet.state">ON
                </button>
              </div>
            </div>
            <!--<div class="switch" v-if="droplet.state==='off'">-->
            <!--<label>-->
            <!--OFF {{droplet.state }}-->
            <!--<input type="checkbox"  @change="updateStatus(index)" checked="false">-->
            <!--<span class="lever"></span> ON-->
            <!--</label>-->
            <!--</div>-->
            <!--<div class="switch" v-else>-->
            <!--<label>-->
            <!--OFF {{droplet.state }}-->
            <!--<input type="checkbox"  @change="updateStatus(index)" checked="true">-->
            <!--<span class="lever"></span> ON-->
            <!--</label>-->
            <!--</div>-->

            <!--<div class="switch" v-else-if="droplet.state == 'ready'">-->
            <!--<label>-->
            <!--OFF {{ droplet.state }}-->
            <!--<input type="checkbox" checked  v-model="droplet.state"  @change="updateStatus(index)">-->
            <!--<span class="lever"></span> ON-->
            <!--</label>-->
            <!--</div>-->
            <!--<button type="button" class="btn btn-sm  btn-info waves-effect waves-light">ON/OFF</button>-->
          </td>
          <td width="120px">
            <router-link class="btn btn-configure btn-sm" v-bind:to="'droplet-details/'+droplet.id">Configure
            </router-link>
          </td>

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
      return {
        delay: false,
        status: '',
        searchDroplet: '',
        serverStatus: '',
        droplets: [],
        alldroplets: []
      }
    },
    created: function () {
      this.loadApiData();
      this.dropletDetails();
    },
    methods: {
      loadApiData: function () {
        var vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get("https://command-center-apis.herokuapp.com/vm/")
          .then(function (response) {
            //console.log(response.data);
            vm.droplets = response.data.data;
            vm.alldroplets = response.data.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            //console.log(response);
          });
      },
      updateStatus: function (index) {
        this.delay = true;
        let vm = this;
        //get  ingle  droplet by  index
        let getdroplet = this.droplets[index];
        //console.log(getdroplet);
        //find state
        let state = getdroplet.state;
        //alert(state);
        let dropletID = getdroplet.id;
        if (state == 'off') {
          console.log(state);
          //axios.get("https://command-center-apis.herokuapp.com/vm/start/"+dropletID+'/')
          axios.put("https://command-center-apis.herokuapp.com/vm/start/" + dropletID + '/', {headers: {"Content-Type": 'application/json'}})
            .then(function (response) {
              //vm.$toasted.show('Success', {type: 'success', icon: 'fa-exclamation-triangle'});
              //end loading
              vm.$parent.endLoading();
              vm.$router.go();
              vm.droplets.$set(index, {state: 'ready'});
            })
            .catch(function (error) {
              //vm.$toasted.show('Success', {type: 'success', icon: 'fa-exclamation-triangle'});
              //end loading
              vm.$parent.endLoading();
              vm.$router.go();
              vm.droplets.$set(index, {state: 'ready'});
            });
          //alert("i am  true"+ dropletID);
        } else {
          console.log(state);
          //vm.$parent.startLoading();
          //axios.get("https://command-center-apis.herokuapp.com/vm/stop/"+dropletID+'/')
          // axios.put("https://command-center-apis.herokuapp.com/vm/stop/psygfb9zd/",{headers: { "Content-Type": 'application/json'}})
          axios.put("https://command-center-apis.herokuapp.com/vm/stop/" + dropletID + '/', {headers: {"Content-Type": 'application/json'}})
            .then(function (response) {
              //vm.$toasted.show('Success', {type: 'success', icon: 'fa-exclamation-triangle'});
              //end loading
              //vm.$parent.endLoading();
              vm.$router.go();
              vm.droplets.$set(index, {state: 'off'});
              console.log(this.droplets);
              //console.log(response.data);
              // vm.droplets.$remove(index)
              //reload this  page
              //vm.$router.go();

            })
            .catch(function (error) {
              //end loading
              //vm.$parent.endLoading();
              //vm.$toasted.show('Success', {type: 'success', icon: 'fa-exclamation-triangle'});
              vm.$router.go();
              vm.droplets.$set(index, {state: 'off'});

            });
          //alert("i am  false"+ dropletID);
        }
        //console.log(this.droplets[index]);
        //alert();
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

