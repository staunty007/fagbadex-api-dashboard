<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getAffiliates">Refresh <i class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">Affiliate</p>
          <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add')">Add
            Affiliate</button>
        </div>
        <hr>
        <div class="form-group row" v-for="(aff, i) in affiliates" :key="i">
          <label for="inputText" class="col-sm-3 col-form-label">Company Name <span
              class="font-weight-bold">:</span></label>
          <div class="col-sm-8">
            <input type="text" class="form-control form-control-sm square-input input-branch" v-model="aff.companyName"
              :id="aff.id">
          </div>
          <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(aff.id)"><i
              class="fa fa-times"></i></button>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveAffiliate"
          :disabled="affiliates.length < 1">{{ loading ? 'Submitting..': 'Submit' }}</button>
      </div>
    </div>
    <div v-if="pageLoader">
       <span class="d-flex justify-content-center pt-5">
          <i class="fa fa-spinner fa-spin fa-5x text-primary"></i>
        </span>
    </div>
  </form>
</template>

<script>
  import {
    COMPANY_AFFILIATE_GET,
    COMPANY_AFFILIATE_CREATE,
    COMPANY_AFFILIATE_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "Affiliates",
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
      this.getAffiliates()
    },
    data() {
      return {
        loading:false,
        pageLoader: false,
        counter: {
          affiliates: 0
        },
        affiliates: [],
        isUpdated: false,
      }
    },
    methods: {
      modifyAction(args) {
        //console.log(args); return;
        if (args != "add") {
          this.affiliates = this.affiliates.filter(e => e.id != args);
          this.counter.affiliates = this.affiliates.length
          return;
        }
        this.counter.affiliates = this.counter.affiliates + 1
        this.affiliates.push({
          id: `${this.counter.affiliates}`,
          companyName: ''
        });
      },
      async getAffiliates() {
        this.pageLoader = true
        await this.$axios.get(COMPANY_AFFILIATE_GET(this.company_id))
          .then((res) => {
            //  console.log(res.data.dataInfo)
            //  return;
            this.pageLoader = false
            
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true

            const data = res.data.dataInfo.affiliates
            const affiliates = data.map((e, i) => {
              return {
                id: i++,
                companyName: e.companyName
              }
            })

            this.affiliates = affiliates

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveAffiliate() {
        this.loading = true
        const affiliates = JSON.parse(JSON.stringify(this.affiliates)).map(e => {
          return {
            companyName: e.companyName
          }
        });

        const payload = {
            affiliates: affiliates
        }

        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(COMPANY_AFFILIATE_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(COMPANY_AFFILIATE_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getAffiliates();
          })

          this.$notify(
            "Affiliates Added",
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
      //this.modifyAction("add")
    }
  }

</script>

<style>

</style>
