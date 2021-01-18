<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getPDf">Refresh <i
          class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">

        </div>
        <hr>
        <div v-if="pdfLink!=''" class="row">
          <div class="col-md-3">
            <a :href="pdfLink" target="_blank" class="btn btn-light text-primary rounded-0 text-uppercase">View PDF <i
                class="fa fa-eye"></i></a>
          </div>
          <div class="col-md-4">
            <p class="mt-2 text-uppercase text-primary font-weight-bold">Upload New PDF Below <i
                class="fa fa-arrow-down"></i></p>
          </div>
        </div>
        <hr>
        <form action="">
          <div class="form-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" accept="application/pdf" ref="file"
                @change="handleFileUpload()">
              <label class="custom-file-label" for="customFile">Company Profile PDF</label>
            </div>
          </div>
        </form>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" :disabled="this.file==''"
          @click.prevent="submitFile()">{{ loading ? 'Submitting..': 'Submit' }}</button>
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
    UPLOAD_PDF,
    GET_PDF
  } from "@/utils/routes.js"
  export default {
    name: "PdfUpload",
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
      this.getPDf()
    },
    data() {
      return {
        loading: false,
        pageLoader: false,
        isUpdated: false,
        pdfLink: '',
        file: ''
      }
    },
    methods: {
      getPDf() {
        this.pageLoader = true
        this.$axios.get(GET_PDF(this.company_id))
          .then((res) => {
            this.pageLoader = false
            const response = res.data.dataInfo
            if (response == null) {
              this.isUpdated = false
            } else {
              this.isUpdated = true
              this.pdfLink = response.pdfLink
            }
            console.log(res)
          })
          .catch((err) => {
            this.pageLoader = false
            console.log(err)
          })
      },
      notify() {
        this.$notify(
          "PDF Uploaded",
          "top-right",
          "primary"
        );
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
      submitFile() {
        let formData = new FormData();
        formData.append('pdfFile', this.file);
        formData.append('companyId', this.company_id)

        //console.log(formData); return;
        try {
          const req = this.$axios.post(UPLOAD_PDF,
            formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          const app = this
          req.then(function (res) {
            app.$notify(
              "PDF Uploaded",
              "top-right",
              "primary"
            );
            app.getPDf()
          })
          
        } catch (err) {
          console.log(err);
        }
      },
    }

  }

</script>

<style>

</style>
