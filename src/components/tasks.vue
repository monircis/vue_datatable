<template>

  <div class="form-modal form-block dropletarea">
    <!--<code>-->
      <!--{{ tasks }}-->
    <!--</code>-->

    <div class="tp-area">
      <h3 class="pull-left">Task List </h3>
    </div>
    <div class="table-responsive droplets mt15">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>Machine Name</th>
          <th>Running Task Name</th>
          <th>Updated At</th>
          <th class="text-center">Status</th>
          <!--<th>Action</th>-->
        </tr>
        </thead>
        <tbody>
        <tr v-for="(task ,index) in tasks">
          <td>{{ task.machine }}</td>
          <td>{{ task.task}}</td>
          <td>{{ task.updatedAt }}</td>
          <td class="text-center">
            <button class="btn btn-success btn-xs" v-if="task.status">
              True
            </button>
            <button class="btn btn-danger btn-xs   animated shake" v-else>
              False
            </button>

          </td>
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
        tasks: []
      };

    },
    created: async function () {
      this.loadApiData();
      // setInterval(() => {
      //   this.loadApiData();
      // }, 10000)
    },
    methods: {
      loadApiData: function () {
        let vm = this;
        let uri = "/task/running-tasks";
         axios.get(this.globalUrl + uri)
          .then(function (response) {
            vm.tasks = response.data.data;
          })
          .catch((err) => {
            console.log(`${err.message}`);
          });
      }
    }
  };
</script>

