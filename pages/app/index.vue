<template>
    <!-- Main Content -->
    <div class="hk-pg-wrapper vh-100">
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
                    <h6>NEWEST COMPANIES</h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="table-wrap">
                        <div class="table-responsive">
                          <table class="table table-sm table-striped table-hover mb-0">
                            <thead>
                              <tr>
                                <th class="font-weight-bold">Company Name</th>
                                <th class="font-weight-bold">Company Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(company, index) in companyLists" :key="index">
                                <td>{{ company.companyName }}</td>
                                <td>{{ company.companyCode }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
      },
      companyLists: [],
      error: {}
    }
  },
  methods: {
    async getDashboardData() {
      Promise.all([
        await this.$axios.get(FETCH_ALL_COMPANIES),
        await this.$axios.get(FETCH_ALL_PARTNERS)
      ])
      .then((response) => {
          this.companyLists = response[0].data.dataInfo.slice(0, 2)
          this.companies = response[0].data.dataInfo.length
          const partners = response[1].data.dataInfo
          this.partners = {
            total: partners.length,
            active: partners.filter(el => el.isValid == true).length,
            inactive: partners.filter(el => el.isValid == false).length
          }
      })
      .catch(err => {
       this.error = err.response
      }) 
    }
  },
  mounted() {
    this.getDashboardData()
  }
}
</script>

