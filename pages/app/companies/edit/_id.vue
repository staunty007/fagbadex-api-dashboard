<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper">
    <!-- Breadcrumb -->
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Companies</a></li>
        <li class="breadcrumb-item active" aria-current="page">Edit Company</li>
        <li class="ml-auto">
          <nuxt-link class="btn btn-primary btn-block btn-sm" to="/app/companies"><small>Show All</small> <i class="fa fa-list-ul"></i>
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
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('register')" :class="{ active: section.register }">
                        REGISTER
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('profile')" :class="{ active: section.profile }">
                        PROFILE
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('affiliates')" :class="{ active: section.affiliates }">
                        AFFILIATES
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('board')" :class="{ active: section.board }">
                        BOARD
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('team')" :class="{ active: section.team }">
                        MGT TEAM
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('products')" :class="{ active: section.products }">
                        PRODUCTS
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('risk')" :class="{ active: section.risk }">
                        RISK FACTOR
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('shareholder')" :class="{ active: section.shareholder }">
                        SHAREHOLDERS
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('summary')" :class="{ active: section.summary }">
                        SUMMARY
                      </button>
                      <button type="button" class="list-group-item list-group-item-action font-weight-bold rounded-0 btn-sm" @click="displaySection('pdfupload')" :class="{ active: section.pdfupload }">
                        PDF UPLOAD
                      </button>
                    </ul>
                  </div>
                  <div class="col-md-9">
                    <keep-alive>
                      <Register  v-if="section.register" :company_id="company_id" :isUpdate="isUpdate"/>
                      <Profile  v-if="section.profile" :company_id="company_id"/>
                      <Affiliates  v-if="section.affiliates" :company_id="company_id"/>
                      <Board  v-if="section.board" :company_id="company_id"/>
                      <ManagementTeam  v-if="section.team" :company_id="company_id"/>
                      <Products  v-if="section.products" :company_id="company_id"/>
                      <RiskFactor  v-if="section.risk" :company_id="company_id"/>
                      <Shareholders  v-if="section.shareholder" :company_id="company_id"/>
                      <Summary  v-if="section.summary" :company_id="company_id"/>
                      <PdfUpload  v-if="section.pdfupload" :company_id="company_id"/>
                    </keep-alive>
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
  import Register from "@/components/company/Register";
  import Profile from "@/components/company/Profile";
  import Affiliates from "@/components/company/Affiliates";
  import Board from "@/components/company/Board";
  import ManagementTeam from "@/components/company/ManagementTeam";
  import Products from "@/components/company/Products";
  import RiskFactor from "@/components/company/RiskFactor";
  import Shareholders from "@/components/company/Shareholders";
  import Summary from "@/components/company/Summary";
  import PdfUpload from "@/components/company/PdfUpload";


  import { MODIFY_COMPANY } from "@/utils/routes"

  export default {
    components: {
      Register,
      Profile,
      Affiliates,
      Board,
      ManagementTeam,
      Products,
      RiskFactor,
      Shareholders,
      Summary,
      PdfUpload
    },
    data() {
      return {
        loading: false,
        isUpdate: true,
        //company_id: "",
        section: {
          register: true,
          profile: false,
          affiliates: false,
          team: false,
          products: false,
          risk: false,
          shareholder: false,
          summary: false,
          pdfupload: false
        },
        company: {},
        error: {}
      }
    },
    mounted() {
      this.getCompany();
    },  
    methods: {
      displaySection(section) {
        const sectionData = this.section
        const newSection = Object.keys(sectionData).forEach(function(key){ sectionData[key] = false });
        //this.company_id = "SkdFcLUySUG2eaUJwHup"
        this.section[section] = true
      } ,
      getCompany(){
        this.$axios.get(MODIFY_COMPANY(this.company_id))
        .then((res) => {
          this.company = res.data.dataInfo
          console.log(res.data.dataInfo)
        })  
        .catch((err) => {
          console.log(err.response)
        })
      }
    },
    computed: {
      company_id() {
        return this.$route.params.id
      }
    },
    watch: {
      section: {
        handler(val){
          // const section = this.section
          // const newSection = Object.keys(section).forEach(function(key){ section[key] = false });
          // console.log(newSection);
          // console.log('Item Changed')
          // console.log(val)
        },
        deep: true
      }
    },
  }

</script>

<style>

</style>
