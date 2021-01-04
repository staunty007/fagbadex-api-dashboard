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

                  <vue-good-table :columns="companies.columns" :rows="companies.rows" :search-options="{
                    enabled: true
                  }" :pagination-options="{
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

    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title text-uppercase font-weight-bold text-dark">Delete Company</p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-uppercase">Are you Sure ?</p>
            <div class="mt-5">
              <div class="row">
                <div class="col-md-6">
                  <button class="btn btn-danger btn-sm btn-block" @click="deleteCompany">Yes</button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-secondary btn-sm btn-block" data-dismiss="modal">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- /Main Content -->
</template>

<script>
  import {
    FETCH_ALL_COMPANIES,
    MODIFY_COMPANY
  } from "@/utils/routes";
  export default {
    data() {
      return {
        companies: {
          columns: [{
              label: 'Company Name',
              field: 'companyName',
            },
            {
              label: 'Registered Name',
              field: 'registeredName',
            },
            {
              label: 'Region Code',
              field: 'regionCode',
            },
            {
              label: 'Company ID',
              field: 'companyUid',
            },
            {
              label: 'More',
              field: 'more',
              html: true,
            },
          ],
          rows: [],
        },
        detailedCompanies: [],
        selectedCompanyId: "",
        error: {}
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
                registeredName: e.registeredName,
                regionCode: e.regionCode,
                companyUid: e.uId,
                more: `
                <div class='btn-group'>
                  <button type='button' class='btn btn-info  btn-sm more-data' data-id='${e.uId}'  data-company='${e.companyName}' data-type='view'><i class='fa fa-eye'></i></button>
                  <button type='button' class='btn btn-warning  btn-sm more-data' data-id='${e.uId}'  data-company='${e.companyName}' data-type='edit'><i class='fa fa-pencil'></i></button>
                  <button type='button' class='btn btn-danger  btn-sm more-data' data-id='${e.uId}' data-company='${e.companyName}' data-type='delete'> <i class='fa fa-trash'></i></button>
                </div>
                `
              }
            });
            setTimeout(() => {
              this.selectCompany()
            }, 1000);
          })
          .catch((err) => {
            this.error = err.response
          })
      },
      selectCompany() {
        var self = this
        //console.log("Helo")
        $('.more-data').on('click', function (e) {
          //console.log($(this).data('id')); return;
          const name = $(this).data('company');
          const companyId = $(this).data('id');
          const btnType = $(this).data('type');
          //console.log(self.detailedCompanies.filter(el => el.uId == companyId));
          const filteredCompany = self.detailedCompanies.filter(el => el.uId == companyId)[0]
          if (btnType == 'view') {
            self.$router.push({
              name: 'app-companies-search',
              params: {
                company: filteredCompany
              }
            })
          }
          if (btnType == 'edit') {
            const companyId = filteredCompany.uId
            self.$router.push('/app/companies/edit/' + companyId);
          }
          if (btnType == 'delete') {
            self.showModalPopup(companyId);
          }
        });

      },
      async deleteCompany() {
        const id = this.selectedCompanyId
        await this.$axios.delete(MODIFY_COMPANY(id))
          .then((res) => {
            this.successToast('Company Deleted Successfully..')
            this.fetchAllCompanies()
          })
          .catch((err) => {
            this.error = err.response
          })
        $('#deleteModal').modal('hide')
      },
      showModalPopup(id) {
        console.log(id);
        this.selectedCompanyId = id
        $('#deleteModal').modal('show')
      },
      successToast(message) {
        $.toast().reset('all');
        $.toast({
          text: `<p>${message}.</p>`,
          position: 'top-right',
          loaderBg: '#ab26aa',
          class: 'jq-toast-success',
          hideAfter: 3500,
          stack: 6,
          showHideTransition: 'fade'
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
