
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
            <router-link v-bind:to="'/'" class="active dashboard" >
              <i class="icon-icommon-accounting sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">Dashboard</span>
            </router-link>
          </li>
          <li>
           <router-link v-bind:to="'/'"   >
             <i class="icon-icommon-hrm sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">Patients</span>
            </router-link>
          </li>
          <li>

           <router-link v-bind:to="'/createnew'" class="||  has-submenu" >
              <i class="icon-icommon-hrm sidebar-menu__icon"></i>
              <span class="menu-text menu-text__overwrite">New Patient</span>
            </router-link>
          </li>
          <li>

          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
</script>

