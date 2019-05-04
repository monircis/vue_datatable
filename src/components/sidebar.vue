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
              <i class="icon-icommon-accounting sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">Droplets</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/linkedin-profile-list'" class="dashboard">
              <i class="icon-icommon-accounting sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">Linkedin Profile</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/proxys'" class="dashboard">
              <i class="icon-icommon-accounting sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">proxys</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
</script>

