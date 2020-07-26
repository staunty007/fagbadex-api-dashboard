<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper vh-100">
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Partners</a></li>
        <li class="breadcrumb-item active" aria-current="page">All Partners</li>
        <li class="ml-auto">
          <nuxt-link to="/app/partners/create" class="btn btn-primary btn-sm"><small>Add New Partner </small><i
              class="fa fa-user-plus"></i>
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
                <h5 class="hk-sec-title">All Partners</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <div class="table-wrap">

                  <vue-good-table :columns="partners.columns" :rows="partners.rows" :search-options="{
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
            <p class="modal-title text-uppercase font-weight-bold text-dark">Delete Partner</p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-uppercase">Are you Sure ?</p>
            <div class="mt-5">
              <div class="row">
                <div class="col-md-6">
                  <button class="btn btn-danger btn-sm btn-block" @click="deletePartner">Yes</button>
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

    <div class="modal fade" id="displayFullView" tabindex="-1" role="dialog" aria-labelledby="exampleModalLarge01"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold">{{ selectedPartner.partnerName }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body bg-light">
            <div class="row">
              <div class="col-md-9 col-sm-12">
                <div class="card rounded-0">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="card-title text-uppercase">Auth Credentials</h6>
                    </div>
                    <p class="card-text">
                      <span class="font-weight-bold">user : </span>
                      <span>{{ selectedPartner.authUser}}</span>
                    </p>
                    <p class="card-text">
                      <span class="font-weight-bold">password : </span>
                      <span>{{ selectedPartner.authPassword}}</span>
                    </p>
                    <p class="card-text">
                      <span class="font-weight-bold">secret : </span>
                      <small>{{ selectedPartner.authSecret}}</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <div class="card rounded-0">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="card-title font-weight-bold text-uppercase">API Calls</h6>
                    </div>
                    <p class="card-text">
                      <span class="font-weight-bold">total</span>: <span>{{ selectedPartnerCalls.total }}</span>
                    </p>
                    <p class="card-text">
                      <span class="font-weight-bold">monthly</span>: <span> {{ selectedPartnerCalls.monthly }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->

  </div>
  <!-- /Main Content -->
</template>

<script>
  const dateFormat = require('dateformat');
  import {
    FETCH_ALL_PARTNERS,
    BLOCK_PARTNER,
    UNBLOCK_PARTNER,
    DELETE_PARTNER,
    PARTNER_API_CALLS
  } from "@/utils/routes";
  export default {
    data() {
      return {
        loading: false,
        partners: {
          columns: [{
              label: 'Partner Name',
              field: 'partnerName',
            },
            {
              label: 'Partner Email',
              field: 'partnerEmail',
            },
            {
              label: 'Status',
              field: 'status',
            },
            {
              label: 'Created At',
              field: 'created',
            },
            {
              label: 'Block/Unblock',
              field: 'btn',
              html: true,
            },
            {
              label: 'Actions',
              field: 'actions',
              html: true,
            }
          ],
          rows: [],
          detailedPartners: [],
          partnerId: ''
        },
        selectedPartner: {},
        selectedPartnerCalls: {
          monthly: 0,
          total: 0
        },
        error: {}
      }
    },
    methods: {
      async fetchAllPatners() {
        await this.$axios.get(FETCH_ALL_PARTNERS)
          .then((res) => {
            const partners = res.data.dataInfo
            this.detailedPartners = partners
            this.partners.rows = partners.map((e) => {
              return {
                partnerName: e.partnerName,
                partnerEmail: e.partnerEmail,
                status: e.isValid == true ? 'active' : 'inactive',
                created: dateFormat(e.createdAt, "d-m-yyyy h:MM TT"),
                btn: `
                ${e.isValid ?
                `<button type='button' class='btn btn-warning text-dark btn-sm action-partner' data-id='${e._id}' data-type='block'>Block <i class='fa fa-lock'></i></button>`
                :
                `<button type='button' class='btn btn-info btn-sm action-partner' data-id='${e._id}' data-type='unblock'>Unblock <i class='fa fa-unlock'></i></button>` 
                }`,
                actions: `
                <div class='btn-group'>
                  <button type='button' class='btn btn-info  btn-sm action-partner' data-id='${e._id}' data-type='view'>View <i class='fa fa-eye'></i></button>
                  <button type='button' class='btn btn-danger  btn-sm action-partner' data-id='${e._id}' data-type='delete'>Delete <i class='fa fa-trash'></i></button>
                </div>
                `
              }
            });
            setTimeout(() => {
              this.modifyPartner()
            }, 1000);
          })
          .catch((err) => {
            this.error = err.response
          })
      },
      modifyPartner() {
        var self = this
        $('.action-partner').on('click', function (e) {
          const actionId = $(this).data('id');
          const actionType = $(this).data('type');
          if (actionType == 'block')
            self.blockPartner(actionId)
          if (actionType == 'unblock')
            self.unblockPartner(actionId)
          if (actionType == 'delete')
            self.showModalPopup(actionId)
          if (actionType == 'view')
            self.displayFullInfo(actionId)
        });
      },
      async blockPartner(id) {
        await this.$axios.put(BLOCK_PARTNER(id))
          .then((res) => {
            this.successToast('Partner Blocked..')
            this.fetchAllPatners()
          })
          .catch((err) => {
            this.error = err.response
          })
      },
      async unblockPartner(id) {
        await this.$axios.put(UNBLOCK_PARTNER(id))
          .then((res) => {
            this.successToast('Partner Unblocked..')
            this.fetchAllPatners()
          })
          .catch((err) => {
            this.error = err.response
          })
      },
      async deletePartner() {
        const id = this.partners.partnerId
        await this.$axios.delete(DELETE_PARTNER(id))
          .then((res) => {
            this.successToast('Partner Deleted Successfully..')
            this.fetchAllPatners()
          })
          .catch((err) => {
            this.error = err.response
          })
        $('#deleteModal').modal('hide')
      },
      async getPartnerCalls(id) {
        this.selectedPartnerCalls = {}
        await this.$axios.get(PARTNER_API_CALLS(id))
          .then((res) => {
            const response = res.data.dataInfo
            this.selectedPartnerCalls = {
              monthly: response.monthly.length,
              total: response.total.length
            }
          })
          .catch(err => {
            console.log(err.response)
          })
      },
      showModalPopup(id) {
        this.partners.partnerId = id
        $('#deleteModal').modal('show')
      },
      displayFullInfo(id) {
        this.getPartnerCalls(id)
        this.selectedPartner = this.detailedPartners.filter(e => e._id == id)[0];
        $('#displayFullView').modal('show');
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
      this.fetchAllPatners()
    }
  }

</script>

<style>

</style>
