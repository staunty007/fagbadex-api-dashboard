<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper vh-100">
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Companies</a></li>
        <li class="breadcrumb-item active" aria-current="page">All Companies</li>
        <li class="ml-auto">
          <nuxt-link to="/app/companies/create" class="btn btn-primary btn-sm"><small>Add New Company </small><i
              class="fa fa-plus"></i>
          </nuxt-link>
        </li>
      </ol>
    </nav>
    <!-- /Breadcrumb -->

    <!-- Container -->
    <div class="container">

      <!-- Row -->
      <div class="row">
        <div class="col-xl-12">
          <section class="hk-sec-wrapper">
            <div class="row">
              <div class="col-md-3">
                <h5 class="hk-sec-title">All Companies</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <div class="table-wrap">

                  <vue-good-table 
                  :columns="companies.columns"
                  :rows="companies.rows"
                  :search-options="{
                    enabled: true
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'records'
                  }" />

                </div>
              </div>
            </div>
          </section>
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
    FETCH_ALL_COMPANIES
  } from "@/utils/routes";
  export default {
    data() {
      return {
        companies: {
          columns: [
            {
              label: 'Company Name',
              field: 'companyName',
            },
            {
              label: 'Company Code',
              field: 'countryCode',
            },
            {
              label: 'Region Code',
              field: 'regionCode',
            },
            {
              label: 'Supplier ID',
              field: 'supplierId',
            },
            {
              label: 'More',
              field: 'more',
              html: true,
            },
          ],
          rows: [],
          detailedCompanies: []
        },
      }
    },
    methods: {
      async fetchAllCompanies() {
        await this.$axios.get(FETCH_ALL_COMPANIES)
          .then((res) => {
            const companies = res.data.dataInfo
            this.detailedCompanies = companies
            this.companies.rows = companies.map((e) => {
              return {
                companyName: e.companyName,
                countryCode: e.countryCode,
                regionCode: e.regionCode,
                supplierId: e.supplierId,
                more: `<button type='button' class='btn btn-info  btn-sm more-data' data-company='${e.companyName}'>More <i class='fa fa-eye'></i></button>`
              }
            });
            setTimeout(() => {
              this.selectCompany()
            }, 2000);
          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      selectCompany() {
        var self = this
        $('.more-data').on('click', function () {
          const companyName = $(this).data('company');
          const filteredCompany = self.detailedCompanies.filter(el => el.companyName == companyName)[0]
          self.$router.push({
            name: 'app-companies-search',
            params: { company : filteredCompany }
          })
        });

      }
    },
    mounted() {
      this.fetchAllCompanies()
    }
  }

</script>

<style>

</style>
