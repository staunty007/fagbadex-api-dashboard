<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper">
    <!-- Container -->
    <div class="container-fluid">
      <!-- Row -->
      <div class="row">
        <div class="col-xl-12 pa-0">
          <div class="profile-cover-wrap overlay-wrap">
            <div class="profile-cover-img" style="background-image:url('/main/img/trans-bg.jpg')"></div>
            <div class="bg-overlay bg-trans-dark-60"></div>
            <div class="container profile-cover-content py-50">
              <div class="hk-row">
                <div class="col-lg-6">
                  <div class="media align-items-center">
                    <div class="media-img-wrap  d-flex">
                      <div class="avatar">
                        <img src="/main/img/avatar12.jpg" alt="user" class="avatar-img rounded-circle">
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-white text-capitalize display-6 mb-5 font-weight-400">{{ company.companyName }}
                      </div>
                      <div class="font-14 text-white">
                        <span class="font-weight-500 pr-5">{{ company.ceo }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="offset-lg-4 col-lg-2">
                  <nuxt-link to="/app/companies" class="btn btn-primary btn-sm mt-5"><i class="fa fa-caret-left"></i> Back to Companies</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content mt-sm-20 mt-10">
            <div class="tab-pane fade show active" role="tabpanel">
              <div class="container">
                <div class="hk-row">
                  <div class="col-lg-8">
                    <div class="card card-profile-feed">
                      <div class="card-header card-header-action">
                        <div class="media align-items-center">
                          <div class="media-img-wrap d-flex mr-10">
                            <div class="avatar avatar-sm">
                              <img src="/main/img/avatar7.jpg" alt="user" class="avatar-img rounded-circle">
                            </div>
                          </div>
                          <div class="media-body">
                            <div class="text-capitalize font-weight-500 text-dark">Angelic Lauver</div>
                            <div class="font-13">Business Manager</div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center card-action-wrap">
                          <div class="inline-block dropdown">
                            <a class="dropdown-toggle no-caret" data-toggle="dropdown" href="#" aria-expanded="false"
                              role="button"><i class="ion ion-ios-settings"></i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-4 border-right pr-0">
                          <div class="pa-15">
                            <span class="d-block display-6 text-dark mb-5">154</span>
                            <span class="d-block text-capitalize font-14">photos</span>
                          </div>
                        </div>
                        <div class="col-4 border-right px-0">
                          <div class="pa-15">
                            <span class="d-block display-6 text-dark mb-5">65</span>
                            <span class="d-block text-capitalize font-14">followers</span>
                          </div>
                        </div>
                        <div class="col-4 pl-0">
                          <div class="pa-15">
                            <span class="d-block display-6 text-dark mb-5">433</span>
                            <span class="d-block text-capitalize font-14">views</span>
                          </div>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span><i
                              class="ion ion-md-calendar font-18 text-light-20 mr-10"></i><span>Went
                              to:</span></span><span class="ml-5 text-dark">Oh, Canada</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i><span>Worked
                              at:</span></span><span class="ml-5 text-dark">Companey</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-home font-18 text-light-20 mr-10"></i><span>Lives in:</span></span><span
                            class="ml-5 text-dark">San Francisco, CA</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-pin font-18 text-light-20 mr-10"></i><span>From:</span></span><span
                            class="ml-5 text-dark">Settle, WA</span></li>
                      </ul>
                    </div>



                  </div>
                  <div class="col-lg-4">
                    <div class="card">
                      <div class="card-header border border-bottom-primary">
                        More Information
                      </div>
                      <div class="card-body">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><span><i
                                class="ion ion-md-calendar font-18 text-light-20 mr-10"></i><span>Went
                                to:</span></span><span class="ml-5 text-dark">Oh, Canada</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i><span>Worked
                                at:</span></span><span class="ml-5 text-dark">Companey</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-home font-18 text-light-20 mr-10"></i><span>Lives
                                in:</span></span><span class="ml-5 text-dark">San Francisco, CA</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-pin font-18 text-light-20 mr-10"></i><span>From:</span></span><span
                              class="ml-5 text-dark">Settle, WA</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Row -->
    </div>
    <!-- /Container -->



  </div>
  <!-- /Main Content -->
</template>

<script>
  export default {
    data() {
      return {
        company: {}
      }
    },
    validate({
      params,redirect
    }) {
      if(params.hasOwnProperty('company') && typeof params.company == "object") {
        return true
      }
      redirect('/app/companies')
    },
    beforeMount() {
      this.company = this.$route.params.company
    },
    computed: {

    }
  }

</script>

<style>

</style>
