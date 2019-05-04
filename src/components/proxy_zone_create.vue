<template>
  <div class="form-modal form-block">
    <div class="row">
      <div class="col-md-12">
        <div class="tp-area mb15">
          <h3 class="pull-left">Create New Proxy Zone</h3>
          <router-link class="btn-reset pull-right" v-bind:to="'/proxy-zone-list'"> Proxy Zone List's
          </router-link>
        </div>
      </div>

      <div class="col-md-12">
        <div class="form-group">
          <label>
            Zone:
          </label>
          <input type="text" class="form-control" v-model="zone">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Username:
          </label>
          <input type="text" class="form-control" v-model="username">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Password:
          </label>
          <input type="text" class="form-control" v-model="password">
        </div><!--end single-->
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>
            Country:
          </label>
          <select v-model="country" class="form-control show-select">
            <option value="USA">USA</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Singapore">Singapore</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div><!--end single-->
      </div>
    </div>
    <div class="action-footer mt15">
      <button class="btn base-bg" @click="createZone()" value="submit">
        Save Now
      </button>
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
        //dropletDetail: {}
        zone: '',
        username: '',
        password: '',
        country:  ''
      }
    },
    methods: {
      createZone: function () {
        let vm = this;
        if (vm.zone && vm.username  && vm.password && vm.country) {
          //alert(vm.password);
          //start loading
          vm.$parent.startLoading();
          axios.post(this.globalUrl+"/luminati/zone/create",
            {
              zone: vm.zone,
              username: vm.username,
              password: vm.password,
              country: vm.country
            }
          ).then(function (response) {
            console.log(response.data);
            //end loading
            vm.$parent.endLoading();
            vm.$toasted.show('Zone Created Successfully.', {
              type: 'success',
              icon: 'fa-exclamation-triangle'
            });
            vm.zone= '';
            vm.username= '';
            vm.password= '';
            vm.country= '';
          })
            .catch((response) => {
              vm.$parent.endLoading();
              vm.$toasted.show('Something wrong  Try again.', {
                type: 'error',
                icon: 'fa-exclamation-triangle'
              });
              //end loading
              //console.log(response);
            });
        }else{
          vm.$toasted.show('Please Fill all fields', {
            type: 'error',
            icon: 'fa-exclamation-triangle'
          });
        }
      }
    },
  };
</script>
