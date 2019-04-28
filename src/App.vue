<template>
  <div id="app">
    <!-- built files will be auto injected -->
    <div class="outer-wrapper">
      <!-- Bootstrap core CSS -->
      <!-- Material Design Bootstrap -->
      <header class="header-area white-bg nonprint-area" v-if="username">
        <div class="container-fluid">
          <div class="header-main-content ">
            <div class="row">
              <div class="col-sm-5 col-xs-7 pdt15 pdb15">
                <div class="dropdown header-dropdown header-compay-name-dropdown">
                  <button class="btn base-bg " type="button"
                          aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bars pdr10">
                    </i>
                    Server Management Web App {{ username }}
                  </button>
                  <div class="dropdown-menu  no-padding ">
                  </div>
                </div>
              </div>
              <div class="col-sm-7 col-xs-5">
                <div class="text-center header-actions">
                  <button type="button" class="btn base-bg btn-rounded waves-effect pull-right mt20" @click="logout">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <app-sidebar class="nonprint-area" v-if="username"></app-sidebar>
      <div class="main-content-outer">
        <div id="preloader-show" v-if="isLoading">
          <img src="@/assets/images/circle-loader.gif"/>
        </div>
        <div class="main-content-inner pdt50">
          <section class="pdb50 ">
            <div class="container-fluid">
              <router-view></router-view>
              <!--<vue-toastr ref="toastr"></vue-toastr>-->
            </div>
          </section>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  //Nice  to  meet  you  jquery
  // import JQuery
  const $ = require('jquery');

  // We declare it globally
  //window.$ = $;
  $(function () {

  });
  // You can use it now
  //  $('body').click(
  //    alert()
  //  );
  //import your components here
  import sidebar from './components/sidebar.vue';

  export default {
    name: 'app',
    data() {
      return {
        username: '',
        isLoggedIn: true,
        isLoading: false
      }
    },
    components: {
      'app-sidebar': sidebar,
    },
    mounted() {
      if (localStorage.getItem("username")) {
        let xx = this;
        xx.username = localStorage.getItem("username");
      }
    },
    methods: {
      logout: function () {
        console.log("logout");
        localStorage.removeItem("username");
        this.$router.push('/login');
        this.$router.go();
      },
      startLoading: function () {
        this.isLoading = true
      },
      endLoading: function () {
        this.isLoading = false
      }
    }
  };
</script>

<style>
  @import 'assets/css/font-awesome.min.css';
  @import 'assets/css/bootstrap.min.css';
  @import 'assets/css/pickr.min.css';
  @import 'assets/css/select2.min.css';
  @import 'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.0.1/css/bootstrap3/bootstrap-switch.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css';
  @import 'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.5/css/bootstrap-select.min.css';
  @import 'assets/css/style.css';
  @import 'assets/css/toastr.min.css';
</style>
