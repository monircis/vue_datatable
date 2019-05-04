<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="panel pdt30 pdb20 pdl30 pdr30">
        <div class="panel-heading">
          <h3>Server Login <br>
            <small><i class="fa fa-info-circle"></i> Provide Credential</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" placeholder="Username" v-model="username" required>
            <label class="mt15">Password:</label>
            <input type="password" class="form-control  mb15" placeholder="Password" v-model="password" required>
            <button type="submit" class="btn base-bg" @click="login()">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login() {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.post(this.globalUrl+'/user/login/',
          {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            //console.log(response.data);
            //localStorage.setItem("username", response.data.username);
            // vm.$parent.endLoading();
            vm.getProfile();
          })
          .catch((response) => {
            vm.$parent.endLoading();
            this.$toasted.show('Username Or Password Wrong Please Try again', {
              type: 'error',
              icon: 'fa-exclamation-triangle'
            });
            //console.error(response);
          });
      },
      getProfile() {
        let vm = this;
        axios.get(this.globalUrl+'/user/login/')
          .then((response) => {
            console.log(response.data.data);
            localStorage.setItem("username", response.data.data.username);
            //localStorage.setItem("doctor_name", response.data.profile.name);
            //end loading
            vm.$parent.endLoading();
            vm.$router.push('/');
            this.$router.go(this.$router.currentRoute);
            vm.$router.go('/');
          })
          .catch((response) => {
            //end loading
            vm.$parent.endLoading();
            console.log(response)
          });
      }
    }
  };
</script>
