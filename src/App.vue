<template>
  <div class="container-fluid">
    <div class="col-sm-3 nav-menu-section">
      <div class="col-sm-12">
        <img src="https://www.genpt.com/imgwgc/gpc_header.png" alt="Logo">
      </div>
      <div class="menu-items">
        <b-nav vertical class="vertical-menu">
          <b-nav-item active>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/userManagement">User Details</router-link>
          </b-nav-item>
          <b-nav-item disabled>
            <router-link to="/gridComponent">Sample Grid</router-link>
          </b-nav-item>
        </b-nav>
      </div>
    </div>
    <div class="col-sm-9 app-section">
      <div class="col-sm-12 header-section">
        <div class="welcome-user-container">
          <a href="#" class="anchor-no-underline">
            <span class="welcome-msg">Welcome Vinoth</span>
            <span class="glyphicon glyphicon-chevron-down logout-icon"></span>
          </a>
        </div>
        <div class="horizontal-line"></div>
      </div>
      <div class="col-sm-12 content-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
   @import 'main.scss'
</style>
