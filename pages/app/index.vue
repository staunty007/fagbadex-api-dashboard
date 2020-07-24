<template>
    <!-- Main Content -->
    <div class="hk-pg-wrapper">
      <!-- Container -->
      <div class="container mt-xl-50 mt-sm-30 mt-15">
        <!-- Title -->
        <div class="hk-pg-header align-items-top">
          <div>
            <h2 class="hk-pg-title font-weight-600 mb-10"> Dashboard </h2>
          </div>
        </div>
        <!-- /Title -->

        <!-- Row -->
        <div class="row">
          <div class="col-xl-12">
            <div class="hk-row">
              <div class="col-lg-7">

                <div class="hk-row">
                  <div class="col-sm-6">
                    <div class="card card-sm">
                      <div class="card-body" style="background: #233c46;">
                        <div class="d-flex justify-content-between mb-5">
                          <div>
                            <span class="d-block font-15 text-white font-weight-500">Total Companies</span>
                          </div>
                          <div>
                            <span class="badge badge-primary  badge-sm"></span>
                          </div>
                        </div>
                        <div>
                          <span class="d-block display-5 text-dark mb-5">
                            <div class="d-flex justify-content-between">
                              <p class="text-white"><i class="fa fa-bank"></i></p>
                              <p class="text-white">{{ companies }}</p>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="d-flex justify-content-between mb-5">
                          <div>
                            <span class="d-block font-15 text-dark font-weight-500">Total Patners</span>
                          </div>
                          <div>
                            <span class="badge badge-danger badge-sm"></span>
                          </div>
                        </div>
                        <div>
                          <span class="d-block display-5 text-dark mb-5">
                            <div class="d-flex justify-content-between">
                              <p><i class="fa fa-group"></i></p>
                              <p>{{ partners.total }}</p>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="d-flex justify-content-between mb-5">
                          <div>
                            <span class="d-block font-13 text-dark font-weight-500">Active Partners</span>
                          </div>
                        </div>
                        <div>
                          <span class="d-block display-5 text-dark mb-5">{{partners.active }}</span>
                          <small class="d-block"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="card card-sm">
                      <div class="card-body" style="background: #ca342d;">
                        <div class="d-flex justify-content-between mb-5">
                          <div>
                            <span class="d-block font-13 text-white font-weight-500">Inactive Partners</span>
                          </div>
                        </div>
                        <div>
                          <span class="d-block display-5 text-white mb-5">{{ partners.inactive }}</span>
                          <small class="d-block"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-5">
                <div class="card">
                  <div class="card-header card-header-action">
                    <h6>API TRAFFIC CALLS</h6>
                    <div class="d-flex align-items-center card-action-wrap">
                      <div class="inline-block dropdown">
                        <a class="dropdown-toggle no-caret" data-toggle="dropdown" href="#" aria-expanded="false"
                          role="button"><i class="ion ion-ios-more"></i></a>
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
                  <div class="card-body d-none">
                    <div id="e_chart_3" style="height:250px;"></div>
                    <div class="hk-legend-wrap mt-20">
                      <div class="hk-legend">
                        <span class="d-10 bg-purple rounded-circle d-inline-block"></span><span>18-24</span>
                      </div>
                      <div class="hk-legend">
                        <span class="d-10 bg-grey-light-1 rounded-circle d-inline-block"></span><span>25-34</span>
                      </div>
                      <div class="hk-legend">
                        <span class="d-10 bg-grey-light-2  rounded-circle d-inline-block"></span><span>35-44</span>
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
  import {
    FETCH_ALL_COMPANIES,
    FETCH_ALL_PARTNERS
  } from "@/utils/routes";
export default {
  data() {
    return {
      companies: 0,
      partners: {
        total: 0,
        active: 0,
        inactive: 0
      }
    }
  },
  methods: {
    async getDashboardData() {
      Promise.all([
        await this.$axios.get(FETCH_ALL_COMPANIES),
        await this.$axios.get(FETCH_ALL_PARTNERS)
      ])
      .then((response) => {
          this.companies = response[0].data.dataInfo.length
          const partners = response[1].data.dataInfo
          this.partners = {
            total: partners.length,
            active: partners.filter(el => el.isValid == true).length,
            inactive: partners.filter(el => el.isValid == false).length
          }
      })
      .catch(err => {
        console.log(err)
      }) 
    }
  },
  mounted() {
    this.getDashboardData()
  }
}
</script>

