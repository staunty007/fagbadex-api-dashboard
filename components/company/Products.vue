<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getProducts">Refresh <i
          class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">Products</p>
          <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add')">Add
            Product</button>
        </div>
        <hr>
        <div class="bg-light pl-2 pr-2 mb-2" v-for="(prod, i) in products" :key="i">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="" class="font-weight-bold">product name</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="prod.name">
            </div>
            <div class="form-group col-md-7">
              <label for="" class="font-weight-bold">product description</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="prod.description">
            </div>
            <div class="form-group col-md-1 pt-2">
              <button class="btn btn-danger rounded-0 btn-sm" @click.prevent="modifyAction(prod.id)"><span
                  class="i fa fa-times"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveProducts"
          :disabled="products.length < 1">{{ loading ? 'Submitting..': 'Submit' }}</button>
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
    PRODUCT_GET,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "Products",
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
      this.getProducts()
    },
    data() {
      return {
        loading: false,
        pageLoader: false,
        counter: {
          products: 0
        },
        products: [],
        isUpdated: false,
      }
    },
    methods: {
      modifyAction(args) {
        //console.log(args); return;
        if (args != "add") {
          this.products = this.products.filter(e => e.id != args);
          this.counter.products = this.products.length
          return;
        }
        this.counter.products = this.products.length
        this.products.push({
          id: this.counter.products,
          name: '',
          description: '',
        });
      },
      async getProducts() {
        this.pageLoader = true
        await this.$axios.get(PRODUCT_GET(this.company_id))
          .then((res) => {
            //  console.log(res.data.dataInfo)
            //  return;
            this.pageLoader = false
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true

            const data = res.data.dataInfo.products
            const products = data.map((e, i) => {
              return {
                id: i++,
                name: e.name,
                description: e.description,
              }
            })

            this.products = products

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveProducts() {
        this.loading = true
        const products = JSON.parse(JSON.stringify(this.products)).map(e => {
          return {
            name: e.name,
            description: e.description
          }
        });

        const payload = {
          products: products
        }


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(PRODUCT_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(PRODUCT_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getProducts();
          })

          this.$notify(
            "Product Added",
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
