<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="panel pdt30 pdb20 pdl30 pdr30">
        <div class="panel-heading"><h3>Server Login <br><small><i class="fa fa-info-circle"></i> Provide Credential</small></h3></div>
        <div class="panel-body">
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" placeholder="Username" v-model="username" required>
            <label class="mt15">Password:</label>
            <input type="password" class="form-control  mb15" placeholder="Password" v-model="password" required>
            <button type="submit" class="btn base-bg"  @click="login()" >Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
