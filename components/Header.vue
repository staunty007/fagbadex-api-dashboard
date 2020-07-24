<template>
  <div>
    <!-- Top Navbar -->
    <nav class="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
      <a id="navbar_toggle_btn" class="navbar-toggle-btn nav-link-hover" href="javascript:void(0);"><span
          class="feather-icon"><i data-feather="menu"></i></span></a>
      <nuxt-link class="navbar-brand font-weight-700" to='/app'>
        Fagbadex
      </nuxt-link>
      <ul class="navbar-nav hk-navbar-content">
        <li class="nav-item dropdown dropdown-authentication">
          <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="media">
              <div class="media-img-wrap">
                <div class="avatar">
                  <img src="https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png" alt="user" class="avatar-img rounded-circle">
                </div>
                <span class="badge badge-success badge-indicator"></span>
              </div>
              <div class="media-body">
                <span class="text-primary font-weight-bold">John Doe<i class="zmdi zmdi-chevron-down"></i></span>
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
            <a class="dropdown-item" href="#"><i
                class="dropdown-icon zmdi zmdi-account"></i><span>Profile</span></a>
            <div class="dropdown-divider"></div>
            <nuxt-link class="dropdown-item" to="/"><i class="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></nuxt-link>
          </div>
        </li>
      </ul>
    </nav>
    <!-- /Top Navbar -->
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
.hk-wrapper .hk-navbar.navbar-light {
    background: #15416e29;
}
</style>
