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
            <router-link v-bind:to="'/'"  v-on:click="setActive('home')" :class="{ active: isActive('home') }" >
              <img src="@/assets/images/network.png" height="30px"/>
              <span class="menu-text menu-text__overwrite mt5">LinkedIn Profile</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/proxy-zone-list'" v-on:click="setActive('proxy-zone-list')" :class="{ active: isActive('proxy-zone-list') }">
              <img src="@/assets/images/placeholder.png" height="30px"/>
              <span class="menu-text menu-text__overwrite mt5">Proxy Zone</span>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'/proxies'" v-on:click="setActive('proxies')" :class="{ active: isActive('proxies') }">

              <img src="@/assets/images/519151.png" height="30px"/>
              <span class="menu-text menu-text__overwrite mt5">Proxies</span>
            </router-link>
          </li>

          <li>
            <router-link v-bind:to="'/machines'" v-on:click="setActive('machines')" :class="{ active: isActive('machines') }" >
              <img src="@/assets/images/database.png" height="25px"/>
              <span class="menu-text menu-text__overwrite mt5">Machines</span>
            </router-link>
          </li>


        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return { activeItem: '' }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem // no need for Vue.set()
      }
    }
  }
</script>
