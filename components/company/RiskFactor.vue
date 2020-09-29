<template>
  <form action="">
    <div class="row">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">RiskFactor</p>
        </div>
        <hr>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">Assessment Rating: </label>
          <div class="col-sm-5">
            <input type="text"  class="form-control form-control-sm square-input" v-model="risk.assessmentRating">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">CreditLine Amount: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="risk.creditLineAmount">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3 col-form-label font-weight-bold">CreditLine Opinion: </label>
          <div class="col-sm-5">
            <input type="text" class="form-control form-control-sm square-input" v-model="risk.creditLineOpinion">
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
    RISK_GET,
    RISK_CREATE,
    RISK_UPDATE,
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
        risk: {
          assessmentRating: "",
          creditLineAmount: "",
          creditLineOpinion: "",
        },
        isUpdated: false,
      }
    },
    methods: {
      async getRiskFactors() {
        await this.$axios.get(RISK_GET(this.company_id))
          .then((res) => {
            // console.log(res.data.dataInfo)
            // return;
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true
            //console.log(res.data.dataInfo.riskFactor); return;
            const riskFactor = res.data.dataInfo.riskFactor
            //console.log(riskFactor); return;
            this.risk = {
                ...riskFactor
            }

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveFactor() {
        this.loading = true

        const payload = {
          riskFactor: this.risk
        }


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(RISK_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(RISK_CREATE(this.company_id), payload)
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
