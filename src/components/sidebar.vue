<template>
  <div class="sidebar  ">
    <div class="sidebar__humbarger" id="sidebar__humbarger">
					<span>
					</span>
      <span>
					</span>
      <span>
					</span>
    </div>
    <div class="sidebar__inner">
      <div class="sidebar-menu">
        <ul class="nav panel-list menu-accordion">
          <li>
            <router-link v-bind:to="'/'" class="active dashboard">
              <i class="fa fa-server fa-2x" aria-hidden="true"></i>

              <span class="menu-text menu-text__overwrite">Machines</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/linkedin-profile-list'" class="dashboard">
              <i class="fa fa-users fa-2x"></i>
              <span class="menu-text menu-text__overwrite">Linkedin Profile</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/proxies'" class="dashboard">
              <i class="fa fa-connectdevelop fa-2x" aria-hidden="true"></i>

              <span class="menu-text menu-text__overwrite">Proxies</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/proxy-zone-list'" class="dashboard">
              <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>

              <span class="menu-text menu-text__overwrite">Proxy Zone</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
</script>

