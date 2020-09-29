<template>
  <form action="">
    <div class="row">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">Summary</p>
        </div>
        <hr>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Nature of Premises: </label>
          <div class="col-sm-5">
            <input type="text"  class="form-control form-control-sm square-input" v-model="summary.natureOfPremises">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Date Incorporated: </label>
          <div class="col-sm-5">
            <input type="date" class="form-control form-control-sm square-input" v-model="summary.dateIncorporated">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Legal Form: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.legalForm">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Registration Number: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.registrationNumber">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Share Capital: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.shareCapital">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Issued Capital: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.issuedCapital">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Paid Capital: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.paidCapital">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Auditors: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.auditors">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Registrars: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="summary.registrars">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Staff Strength: </label>
          <div class="col-sm-5">
            <input type="number" class="form-control form-control-sm square-input" v-model="summary.staffStrength">
          </div>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveFactor"
          :disabled="false">{{ loading ? 'Submitting..': 'Submit' }}</button>
      </div>
    </div>
  </form>
</template>

<script>
  import {
    SUMMARY_GET,
    SUMMARY_CREATE,
    SUMMARY_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "RiskFactor",
    props: {
      company_id: {
        type: String,
        required: true,
        validator(value) {
          const newValue = value.trim()
          if (newValue < 1) {
            return false
          }
          return true;
        }
      }
    },
    created() {
      this.getRiskFactors()
    },
    data() {
      return {
        loading: false,
        summary: {
          natureOfPremises: "",
          dateIncorporated: "",
          legalForm: "",
          registrationNumber: "",
          shareCapital: "",
          issuedCapital: "",
          paidCapital: "",
          auditors: "",
          registrars: "",
          staffStrength: "",
        },
        isUpdated: false,
      }
    },
    methods: {
      async getRiskFactors() {
        await this.$axios.get(SUMMARY_GET(this.company_id))
          .then((res) => {
            // console.log(res.data.dataInfo)
            // return;
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true
            //console.log(res.data.dataInfo.riskFactor); return;
            const summary = res.data.dataInfo
            //console.log(riskFactor); return;
            this.summary = summary

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveFactor() {
        this.loading = true

        const payload = this.summary


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(SUMMARY_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(SUMMARY_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getRiskFactors();
          })

          this.$notify(
            "Risk Factor Saved",
            "top-right",
            "primary"
          );


        } catch (err) {
          this.loading = false
          console.log(err.response)
        }
      },
    },
    mounted() {
    }
  }

</script>

<style>

</style>
