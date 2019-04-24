<template>
  <div class="form-modal form-block">
    <div class="tp-area">
      <h3 class="pull-left">Patient's List</h3>

    </div>
    <div class="patiend-lists">
      <!--start single patiend-->
      <div class="row single-tab focus"  v-for="(patient ,i) in patients">
        <router-link v-bind:to="'single/'+patient.id" >
          <div class="col-md-10">


            <div class="patient-main">
              <h4 class="mb0">{{ patient.name }}<span
                class="pull-right base-color">ID: {{ patient.patient_id }}</span>
                <br/>
                <small>{{ patient.address }}</small>
              </h4>
            </div>
          </div>
          <div class="col-md-2">
              <span class="open-col" ><i class="fa fa-location-arrow"
                                                               aria-hidden="true"></i></span>
          </div>
        </router-link>
      </div>
      <!--End single patiend-->
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    data() {
         return{
           crossIcon: false,
           searchPatient: '',
           url: "https://via.placeholder.com/40/eee/FF425D/?text=",
           patients: [],
           allPatients: [],
      }
    },
    created: function() {
      this.loadApiData();
    },
    methods: {
      loadApiData: function() {

        var vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get("https://d-care.herokuapp.com/patients/")
          .then(function(response) {
             console.log(response);
            vm.patients = response.data.results;
            vm.allPatients = response.data.results;
            //end loading
            vm.$parent.endLoading();
          })
          .catch((response) => {
            //end loading
            console.log(response);
          });
      }
    },
    watch: {
    },

  };
</script>

