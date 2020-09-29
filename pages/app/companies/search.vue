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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBxGZyIKEAIragp77u6BbE7ENp4XafzQjQFw&usqp=CAU" alt="user" class="avatar-img rounded-circle">
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-white text-capitalize display-6 mb-5 font-weight-400">{{ company.name }}
                      </div>
                      <div class="font-14 text-white">
                        <span class="font-weight-500 pr-5"><span class="font-weight-bold">Tax No</span>: {{ company.taxNumber }}</span>
                      </div>
                      <div class="font-14 text-white">
                        <span class="font-weight-500 pr-5"><span class="font-weight-bold">Country Code</span>: {{ company.countryDialCode }} |
                        <span class="font-weight-bold">Region Code</span> : {{ company.regionCode }}</span>
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
                              <img src="data:image/png;base64,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" alt="user" class="avatar-img rounded-circle">
                            </div>
                          </div>
                          <div class="media-body">
                            <div class="text-capitalize font-weight-500 text-dark">{{ company.ceo }}</div>
                            <small>Company CEO</small>
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
                      <div class="row text-center d-none">
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
                              class="ion ion-md-calendar font-18 text-light-20 mr-10"></i><span>
                                Registered Name:</span></span><span class="ml-5 text-dark">{{ company.registeredName }}</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i><span>
                              Previous Name:</span></span><span class="ml-5 text-dark">{{ company.previousName }}</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-pin font-18 text-light-20 mr-10"></i><span>Head Office Address:</span></span><span
                            class="ml-5 text-dark">{{ company.headOfficeAddress }}</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-pin font-18 text-light-20 mr-10"></i><span>Postal Address:</span></span><span
                            class="ml-5 text-dark">{{ company.postalAddress }}</span></li>
                        <li class="list-group-item"><span><i
                              class="ion ion-md-pin font-18 text-light-20 mr-10"></i><span>Registration Address:</span></span><span
                            class="ml-5 text-dark">{{ company.registeredName }}</span></li>
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
                                class="ion ion-md-calendar font-18 text-light-20 mr-10"></i><span>
                                Established:</span></span><span class="ml-5 text-dark">{{ company.establishDate }}</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-calendar font-18 text-light-20 mr-10"></i><span>
                                Tel:</span></span><span class="ml-5 text-dark">{{ company.telephone }}</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i><span>
                                Fax:</span></span><span class="ml-5 text-dark">{{ company.fax }}</span></li>
                          <li class="list-group-item"><span><i
                                class="ion ion-md-briefcase font-18 text-light-20 mr-10"></i><span>
                                Website:</span></span><span class="ml-5 text-dark">{{ company.websiteUrl }}</span></li>
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
