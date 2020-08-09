<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper">
    <!-- Breadcrumb -->
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Companies</a></li>
        <li class="breadcrumb-item active" aria-current="page">Add New Company</li>
        <li class="ml-auto">
          <nuxt-link class="btn btn-primary btn-block btn-sm" to="/app/companies"><small>Show All</small> <i
              class="fa fa-list-ul"></i>
          </nuxt-link>
        </li>
      </ol>
    </nav>
    <!-- /Breadcrumb -->
    <!-- /Breadcrumb -->

    <!-- Container -->
    <div class="container mt-2">

      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 mb-30">
          <div class="card">

            <div class="card-body">
              <form class="mb-30">
                <div class="row">
                  <div class="col-md-3">
                    <ul class="list-group mb-15">
                      <button type="button" class="list-group-item list-group-item-action rounded-0 btn-sm"
                        @click="section.name='first'" :class="{ active: section.first }">
                        First
                      </button>
                      <button type="button" class="list-group-item list-group-item-action rounded-0 btn-sm"
                        @click="section.name='second'" :class="{ active: section.second }">
                        Second
                      </button>
                    </ul>
                  </div>
                  <div class="col-md-9">
                    <div class="row" v-if="section.name=='first'">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="">Company Name</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.companyName">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label for="">Registration No</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.registrationNumber">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label for="">Supplier ID</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.supplierId">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="">Name</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.name">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="">History Name</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.historyName">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="">Trade Name</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.tradeName">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label for="">Country Code</label>
                          <select class="form-control form-control-sm square-input" v-model="form.countryCode">
                            <option :value="country.code" v-for="(country, index) in countryList" :key="index">
                              {{ country.name }}</option>
                          </select>
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label for="">Region Code</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.regionCode">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-md-10">
                        <div class="form-group">
                          <label for="">Operate Address</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.operateAddress">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-10">
                        <div class="form-group">
                          <label for="">History Address</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.historyAddress">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                    </div>
                    <div class="row" v-if="section.name=='second'">
                      <div class="col-md-10">
                        <div class="form-group">
                          <label for="">Registration Address</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.registrationAddress">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Tax Number</label>
                          <input type="text" id="" class="form-control form-control-sm square-input"
                            v-model="form.taxNumber">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Establish Date</label>
                          <input class="form-control form-control-sm square-input" type="date"
                            v-model="form.establishDate" />
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Url</label>
                          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.url">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="">Ceo Name</label>
                          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.ceo">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="">Telephone</label>
                          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.tel">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label for="">Fax</label>
                          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.fax">
                          <small class="form-text text-muted"></small>
                        </div>
                      </div>
                      <div class="col-md-5 mt-3">
                        <button class="btn btn-primary btn-block btn-sm" @click.prevent="updateCompany">
                          {{ loading ? 'Submitting..' : 'Submit' }} <i class="fa fa-save"></i> </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-muted">

            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- /Container -->

  </div>
  <!-- /Main Content -->
</template>

<script>
  import {
    ADD_NEW_COMPANY,
    MODIFY_COMPANY,
    FETCH_ALL_COMPANIES
  } from '@/utils/routes';
  import countries from '@/utils/countries.json'
  export default {
    data() {
      return {
        loading: false,
        section: {
          name: 'first',
          first: true,
          second: false
        },
        form: {
          companyName: '',
          supplierId: '',
          name: '',
          historyName: '',
          tradeName: '',
          operateAddress: '',
          historyAddress: '',
          taxNumber: '',
          establishDate: '',
          url: '',
          ceo: '',
          tel: '',
          fax: '',
          countryCode: '',
          regionCode: '',
          registrationAddress: '',
          registrationNumber: ''
        },
        error: {}
      }
    },
    methods: {
      async updateCompany() {
        this.loading = true
        //console.log(this.form); return;
        await this.$axios.put(MODIFY_COMPANY(this.$route.params.id), this.form)
          .then((res) => {
            $.toast({
              text: '<p>Company Updated Successfully.</p>',
              position: 'top-right',
              loaderBg: '#ab26aa',
              class: 'jq-toast-success',
              hideAfter: 3500,
              stack: 6,
              showHideTransition: 'fade'
            });
            this.$router.push('/app/companies')
          })
          .catch(error => {
            if (error.response == undefined) {
              this.error = error.response
              return
            }

            const response = error.response.data
            $.toast().reset('all');
            $("body").removeAttr('class').removeClass("bottom-center-fullwidth").addClass("top-center-fullwidth");
            $.toast({
              text: `<p>${response.message}.</p>`,
              position: 'top-center',
              loaderBg: '#7a5449',
              class: 'jq-has-icon jq-toast-danger',
              hideAfter: 3500,
              stack: 6,
              showHideTransition: 'fade'
            });
          })
          .finally(() => {
            this.loading = false
          })
      },
      async filterCompany() {
        // await this.$axios.get(GET_SINGLE_COMPANY(this.$route.params.id))
        //   .then((res) => {
        //     const companies = res.data.dataInfo
        //     console.log(companies); return;
        //     this.form = {
        //       ...selectedCompany
        //     }

        //   })
        await this.$axios.get(FETCH_ALL_COMPANIES)
          .then((res) => {
            const companies = res.data.dataInfo
            const selectedCompany = companies.filter(e => e._id == this.$route.params.id)[0]
            this.form = {
              ...selectedCompany
            }

          })
      }

    },
    computed: {
      countryList() {
        return countries.map(e => {
          return {
            name: e.name,
            code: e.alpha2Code
          }
        });
      },
      selectedCompany() {
        return this.$route.params.id
      }
    },
    mounted() {
        this.filterCompany();
    },
    watch: {
      'section.name'(val) {
        if (val == 'first') {
          this.section = {
            name: 'first',
            first: true,
            second: false
          }
        } else {
          this.section = {
            name: 'second',
            first: false,
            second: true
          }
        }
      }
    }
  }

</script>

<style>

</style>
