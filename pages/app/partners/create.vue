<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper vh-100">
    <!-- Breadcrumb -->
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Partners</a></li>
        <li class="breadcrumb-item active" aria-current="page">Add New Partner</li>
        <li class="ml-auto">
          <nuxt-link class="btn btn-primary btn-block btn-sm" to="/app/partners"><small>Show All</small> <i
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
        <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div class="card">

            <div class="card-body">
              <h5 class="card-title mb-3 text-primary font-weight-bold">New Partner</h5>
              <form>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Partner name</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control square-input" id="" name="name" v-model="form.partnerName">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">Partner email</label>
                  <div class="col-sm-8">
                    <input type="email" class="form-control square-input" id="" name="email" v-model="form.partnerEmail">
                  </div>
                </div>
                <button class="btn btn-sm btn-primary col-4 offset-3"
                @click.prevent="addNewPatner"> {{ loading ? 'Adding...' : 'Add' }} <i class="fa fa-save"></i></button>
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
    ADD_NEW_PARTNER
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
          partnerName: '',
          partnerEmail: ''
        },
        error: {}
      }
    },
    methods: {
      async addNewPatner() {
        this.loading = true
        await this.$axios.$post(ADD_NEW_PARTNER, this.form)
          .then((res) => {
            $.toast({
              text: '<p>New Partner Added.</p>',
              position: 'top-right',
              loaderBg: '#ab26aa',
              class: 'jq-toast-success',
              hideAfter: 3500,
              stack: 6,
              showHideTransition: 'fade'
            });
            this.$router.push('/app/partners')
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
