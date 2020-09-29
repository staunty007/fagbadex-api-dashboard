<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getShareholders">Refresh <i
          class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">shareholders</p>
          <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add')">Add
            Shareholder</button>
        </div>
        <hr>
        <div class="bg-light pl-2 pr-2 mb-2" v-for="(holder, i) in shareholders" :key="i">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="" class="font-weight-bold"> Name</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="holder.name">
            </div>
            <div class="form-group col-md-1 offset-md-5 pt-2">
              <button class="btn btn-danger rounded-0 btn-sm" @click.prevent="modifyAction(holder.id)"><span
                  class="i fa fa-times"></span></button>
            </div>
            <div class="form-group col-md-12">
              <label for="" class="font-weight-bold">Address</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="holder.address">
            </div>
          </div>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveShareholder"
          :disabled="shareholders.length < 1">{{ loading ? 'Submitting..': 'Submit' }}</button>
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
    SHAREHOLDER_GET,
    SHAREHOLDER_CREATE,
    SHAREHOLDER_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "Shareholders",
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
      this.getShareholders()
    },
    data() {
      return {
        loading: false,
        pageLoader: false,
        counter: {
          shareholders: 0
        },
        shareholders: [],
        isUpdated: false,
      }
    },
    methods: {
      modifyAction(args) {
        //console.log(args); return;
        if (args != "add") {
          this.shareholders = this.shareholders.filter(e => e.id != args);
          this.counter.shareholders = this.shareholders.length
          return;
        }
        this.counter.shareholders = this.shareholders.length
        this.shareholders.push({
          id: this.counter.shareholders,
          name: '',
          address: '',
        });
      },
      async getShareholders() {
        this.pageLoader = true
        await this.$axios.get(SHAREHOLDER_GET(this.company_id))
          .then((res) => {
            //  console.log(res.data.dataInfo)
            //  return;
            this.pageLoader = false
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true

            const data = res.data.dataInfo.shareHolders
            const shareholders = data.map((e, i) => {
              return {
                id: i++,
                name: e.name,
                address: e.address,
              }
            })

            this.shareholders = shareholders

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveShareholder() {
        this.loading = true
        const shareholders = JSON.parse(JSON.stringify(this.shareholders)).map(e => {
          return {
            name: e.name,
            address: e.address
          }
        });

        const payload = {
          shareHolders: shareholders
        }


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(SHAREHOLDER_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(SHAREHOLDER_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getShareholders();
          })

          this.$notify(
            "Shareholder Added",
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
