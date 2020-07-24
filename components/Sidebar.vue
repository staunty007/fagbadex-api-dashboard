<template>
  <div>
    <!-- Vertical Nav -->
    <nav class="hk-nav hk-nav-dark">
      <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i
            data-feather="x"></i></span></a>
      <div class="nicescroll-bar">
        <div class="navbar-nav-wrap">
          <ul class="navbar-nav flex-column">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/app" data-target="#dash_drp">
                <i class="fa fa-area-chart"></i>
                <span class="nav-link-text">Dashboard</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#companies_drp">
                <i class="fa fa-ils"></i>
                <span class="nav-link-text">Companies</span>
              </a>
              <ul id="companies_drp" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/app/companies/create">Add New</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/app/companies">Show All</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#partners_drp">
                <i class="fa fa-users"></i>
                <span class="nav-link-text">Patners</span>
              </a>
              <ul id="partners_drp" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/app/partners/create">Add New</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/app/partners">Show All</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <hr class="nav-separator">
          <div class="nav-header">
            <span>User Interface</span>
            <span>UI</span>
          </div>
           <ul class="navbar-nav flex-column">
             <li class="nav-item ">
              <nuxt-link class="nav-link" to="/">
                <i class="fa fa-power-off"></i>
                <span class="nav-link-text">Logout</span>
              </nuxt-link>
            </li>
           </ul>
          <ul class="navbar-nav flex-column d-none">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#content_drp">
                <span class="feather-icon"><i data-feather="type"></i></span>
                <span class="nav-link-text">Content</span>
              </a>
              <ul id="content_drp" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="typography.html">Typography</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="images.html">Images</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="media-object.html">Media Object</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#utilities_drp">
                <span class="feather-icon"><i data-feather="anchor"></i></span>
                <span class="nav-link-text">Utilities</span>
              </a>
              <ul id="utilities_drp" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="background.html">Background</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="border.html">Border</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="colors.html">Colors</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="embeds.html">Embeds</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="icons.html">Icons</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="shadow.html">Shadow</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="sizing.html">Sizing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="spacing.html">Spacing</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#forms_drp">
                <span class="feather-icon"><i data-feather="server"></i></span>
                <span class="nav-link-text">Forms</span>
              </a>
              <ul id="forms_drp" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="form-element.html">Form Elements</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="input-groups.html">Input Groups</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="form-layout.html">Form Layout</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="form-mask.html">Form Mask</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="form-validation.html">Form Validation</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="form-wizard.html">Form Wizard</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="file-upload.html">File Upload</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="editor.html">Editor</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div id="hk_nav_backdrop" class="hk-nav-backdrop"></div>
    <!-- /Vertical Nav -->
  </div>
</template>

<script>
  export default {
  }

</script>

<style scoped>
  .hk-nav {
    position: fixed;
  }
</style>
