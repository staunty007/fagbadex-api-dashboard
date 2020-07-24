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
              label: 'Delete',
              field: 'delete',
              html: true,
            }
          ],
          rows: [],
          detailedPartners: [],
          partnerId: ''
        },
      }
    },
    methods: {
      async fetchAllPatners() {
        await this.$axios.get(FETCH_ALL_PARTNERS)
          .then((res) => {
            const partners = res.data.dataInfo
            this.detailedCompanies = partners
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
                delete: `<button type='button' class='btn btn-danger  btn-sm action-partner' data-id='${e._id}' data-type='delete'>Delete <i class='fa fa-trash'></i></button>`
              }
            });
            setTimeout(() => {
              this.modifyPartner()
            }, 2000);
          })
          .catch((err) => {
            console.log(err.response)
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
        });
      },
      async blockPartner(id) {
        await this.$axios.put(BLOCK_PARTNER(id))
          .then((res) => {
            this.successToast('Partner Blocked..')
            this.fetchAllPatners()
          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      async unblockPartner(id) {
        await this.$axios.put(UNBLOCK_PARTNER(id))
          .then((res) => {
            this.successToast('Partner Unblocked..')
            this.fetchAllPatners()
          })
          .catch((err) => {
            console.log(err.response)
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
            console.log(err.response)
          })
          $('#deleteModal').modal('hide')
      },
      showModalPopup(id) {
        this.partners.partnerId = id
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
      this.fetchAllPatners()
    }
  }

</script>

<style>

</style>
