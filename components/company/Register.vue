<template>
  <div>
    <div class="row mb-2">
      <div class="col-md-2">
        <button class="btn btn-primary btn-block btn-sm rounded-0" :class="{ active: view.one }"
          @click.prevent="displayView('one')">TAB 1</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary btn-block btn-sm rounded-0" :class="{ active: view.two }"
          @click.prevent="displayView('two')">TAB 2</button>
      </div>
    </div>
    <div class="row" v-if="view.one">
      <div class="col-md-5">
        <div class="form-group">
          <label for=""> Commpany Name</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.companyName">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">Registered Name</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.registeredName">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">Previous Name</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.previousName">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">Enquiry Name</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.enquiryName">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">Trade Name</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.tradeName">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">Sector</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.sector">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-3 d-none">
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
          <label for="">Country Dail Code</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.countryDialCode">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="">Region Code</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.regionCode">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="">Operations</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.operations">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="">Location</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.location">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-10">
        <div class="form-group">
          <label for="">Registred Address</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.registeredAddress">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-10">
        <div class="form-group">
          <label for="">Head Office Address</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.headOfficeAddress">
          <small class="form-text text-muted"></small>
        </div>
      </div>

    </div>
    <div class="row" v-if="view.two">
      <div class="col-md-10 mt-2">
        <div class="form-group">
          <label for="">Postal Address</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.postalAddress">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Tax Number</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.taxNumber">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Establish Date</label>
          <input class="form-control form-control-sm square-input" type="date" v-model="form.establishDate" />
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
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Primary Contact</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.primaryContact">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Email Address</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.emailAddress">
          <small class="form-text text-muted"></small>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="">Telephone</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.telephone">
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label for="">CEO</label>
          <input type="text" id="" class="form-control form-control-sm square-input" v-model="form.ceo">
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
      <div class="col-md-5 offset-md-5 mt-3">
        <button class="btn btn-primary btn-block btn-sm" :disabled="company_id != ''" @click.prevent="addNewCompany"
          v-if="!isUpdate">
          {{ loading ? 'Submitting..' : 'Submit' }} <i class="fa fa-save"></i> </button>
        <button class="btn btn-primary btn-block btn-sm" @click.prevent="updateCompany" v-if="isUpdate">
          {{ loading ? 'Updating..' : 'Update' }} <i class="fa fa-save"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    ADD_NEW_COMPANY,
    MODIFY_COMPANY
  } from '@/utils/routes';
  import countries from '@/utils/countries.json'
  export default {
    name: "Register",
    props: {
      company_id: {
        type: String,
        default: "",
      },
      isUpdate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        view: {
          one: true,
          two: false,
        },
        loading: false,
        form: {
          previousName: '',
          supplierId: '',
          companyName: '',
          enquiryName: '',
          tradeName: '',
          sector: '',
          tradeName: '',
          operations: '',
          location: '',
          headOfficeAddress: '',
          postalAddress: ' ',
          taxNumber: '',
          establishDate: '',
          url: '',
          countryDialCode: '',
          telephone: '',
          fax: '',
          countryCode: '',
          regionCode: '',
          registeredAddress: '',
          registeredName: '',
          ceo: '',
        },
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
      }
    },
    mounted() {
      console.log(this.company_id)
      if (this.isUpdate) {
        this.getCompany()
      }
    },
    methods: {
      async addNewCompany() {
        this.loading = true
        await this.$axios.$post(ADD_NEW_COMPANY, this.form)
          .then((res) => {
            //console.log(res.data.dataInfo._id)
            this.$notify(
              "Company Added Successfully",
              "top-right",
              "success"
            );
            //this.$router.push('/app/companies')
            this.$parent.company_id = res.dataInfo.uId
            this.$parent.displaySection("profile")
            console.log(res.dataInfo)
          })
          .catch(error => {
            if (error.response == undefined) {
              this.error = error.response
              return
            }

            const response = error.response.data
            $.toast().reset('all');
            $("body").removeAttr('class').removeClass("bottom-center-fullwidth").addClass("top-center-fullwidth");
            this.$notify(
              `${response.message}`,
              "top-center",
              "danger"
            );
          })
          .finally(() => {
            this.loading = false
          })
      },
      updateCompany() {
        this.loading = true
        this.$axios.put(MODIFY_COMPANY(this.company_id), this.form)
          .then((res) => {
            this.$notify(
              "Company Updated",
              "top-right",
              "primary"
            );
          })
          .catch((err) => {
            console.log(err.response)
          })
          .finally(e => {
            this.loading = false
          })
      },
      displayView(view) {
        const viewData = this.view
        const newSection = Object.keys(viewData).forEach(function (key) {
          viewData[key] = false
        });
        this.view[view] = true
      },
      getCompany() {
        this.$axios.get(MODIFY_COMPANY(this.company_id))
          .then((res) => {
            this.form = res.data.dataInfo
            console.log(res.data.dataInfo)
          })
          .catch((err) => {
            console.log(err.response)
          })
      },

    }
  }

</script>

<style>

</style>
